import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { CustomIcon } from 'component/customIcon';
import theme from 'theme';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" />
        </Head>
        <div className="header">
            <div className="leftMenu">
                <div className="ui small left icon input">
                    <input type="text" placeholder="Search small..." />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="centerMenu">
                <div className="menuWrapper">
                    <Link href="/">
                        <a>
                            <span>
                                <CustomIcon type="home" color="#000000" />
                            </span>
                        </a>
                    </Link>
                    <Link href="/posts">
                        <a>
                            <span>
                                <CustomIcon type="message" color="#000000" />
                            </span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <span>
                                <CustomIcon type="play_video" color="#000000" />
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="rightMenu">Right</div>
        </div>
        <div className="body">{children}</div>
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
        <style jsx>{`
            .header {
                display: flex;
                height: 56px;
                align-items: center;
                .leftMenu {
                    height: 100%;
                    width: 360px;
                }

                .centerMenu {
                    width: 100%;
                    height: 100%;
                    .menuWrapper {
                        width: 100%;
                        height: 100%;
                        max-width: 700px;
                        display: flex;
                        margin: auto;
                        justify-content: center;
                        a {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            text-align: center;
                            flex-grow: 1;
                            max-width: 111px;
                            &:hover {
                                background-color: ${theme.color.backgroundLight};
                                border-radius: 5px;
                                margin-top: 5px;
                                margin-bottom: 5px;
                            }
                        }
                    }
                }

                .rightMenu {
                    width: 360px;
                }
            }
            .body {
                background-color: ${theme.color.backgroundDark};
            }
        `}</style>
    </>
);

export default Layout;
