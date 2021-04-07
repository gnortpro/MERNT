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
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" />
        </Head>
        <div className="headerContainer">
            <div className="leftMenu">Left</div>
            <div className="centerMenu">
                <a href="/">
                    <span>
                        <CustomIcon type="home" />
                    </span>
                    <div className="hoverCSS" />
                </a>
                <a href="/">
                    <span>
                        <CustomIcon type="home" />
                    </span>
                </a>
                <a href="/">
                    <span>
                        <CustomIcon type="home" />
                    </span>
                </a>
                <a href="/">
                    <span>
                        <CustomIcon type="home" />
                    </span>
                </a>
                <a href="/">
                    <span>
                        <CustomIcon type="home" />
                    </span>
                </a>
            </div>
            <div className="rightMenu">Right</div>
        </div>
        <div className="body">{children}</div>
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
        <style jsx>{`
            .headerContainer {
                display: flex;
                height: 56px;
                align-items: center;

                .leftMenu {
                    width: 320px;
                }

                .centerMenu {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    a {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding: 0 80px;

                        .hoverCSS {

                        }
                    }
                }

                .rightMenu {
                    width: 320px;
                }
            }
            .body {
                background-color: ${theme.color.backgroundDark};
            }
        `}</style>
    </div>
);

export default Layout;
