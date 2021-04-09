import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import theme from 'theme';

interface Props {
    avatar?: string;
    username?: string;
    name?: string;
    isActive?: boolean;
}

export const Avatar: React.FC<Props> = ({ avatar, username, name, isActive }) => {
    return (
        <>
            <Link href={'/username/' + username}>
                <a className={cx('avatar', { active: isActive })}>
                    <div className="image">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="label">{name}</div>
                </a>
            </Link>
            <style jsx>{`
                .avatar {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    padding: 4px 12px;

                    &.active {
                        background-color: ${theme.color.primary[200]};
                        border-radius: ${theme.borderRadius[18]};
                        .label {
                            color: ${theme.color.primary[500]};
                        }
                    }

                    &:hover {
                        background-color: ${theme.color.primary[300]};
                        transition-duration: 200ms;
                        transition-timing-function: linear;
                    }

                    .label {
                        height: 100%;
                        ${theme.typo.T14_M}
                        color: ${theme.color.ink[500]};
                    }

                    .image {
                        max-height: 28px;
                        max-width: 28px;
                        margin-left: -8px;
                        margin-right: 6px;

                        img {
                            width: 100%;
                            height: auto;
                            margin: auto;
                            border-radius: 50%;
                        }
                    }
                }
            `}</style>
        </>
    );
};
