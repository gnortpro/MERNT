const Post = require("../../models/Post");

const checkAuth = require("../../utils/checkAuth");

const { AuthenticationError } = require("apollo-server");

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getPost(_, { postId }) {
      if (postId.match(/^[0-9a-fA-F]{24}$/)) {
        try {
          const post = await Post.findById(postId);
          if (post) {
            return post;
          } else {
            throw new Error("Post not found");
          }
        } catch (err) {
          console.log(err);
          throw new Error(err);
        }
      } else {
        throw new Error("Invalid Post ID");
      }
    },
  },

  Mutation: {
    async createPost(_, { body }, context) {
      const user = checkAuth(context);

      const newPost = new Post({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const post = await newPost.save();

      context.pubsub.publish("NEW_POST", {
        newPost: post,
      });

      return post;
    },

    async deletePost(_, { postId }, context) {
      const { username } = checkAuth(context);

      try {
        const post = await Post.findById(postId);

        if (username === post.username) {
          await post.delete();
          return "Post delete sucessfully!";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async likePost(_, { postId }, context) {
      const { username } = checkAuth(context);

      try {
        const post = await Post.findById(postId);
        if (post) {
          if (post.likes.find((like) => like.username === username)) {
            post.likes = post.likes.filter(
              (like) => like.username !== username
            );
          } else {
            post.likes.push({
              username,
              createdAt: new Date().toISOString(),
            });
          }

          await post.save();

          context.pubsub.publish("LIKE_POST", {
            likePost: post,
          });

          return post;
        } else throw new UserInputError("Post not found");
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_POST"),
    },

    likePost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("LIKE_POST"),
    },
  },
};
