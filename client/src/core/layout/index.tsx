import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import cx from 'classnames';

import { CustomIcon } from 'component/customIcon';
import theme from 'theme';

import { SearchHeader } from './search';
import { CENTER_MENU_ITEMS } from './const';
import { MenuHeaderCenter } from './centerMenu';
import { MenuHeaderRight } from './rightMenu';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
    const [onInputSearch, setInputSearch] = useState(false);

    const handleInputSearch = () => setInputSearch(current => !current);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" />
            </Head>
            <div className="header">
                <SearchHeader />
                <MenuHeaderCenter menuItems={CENTER_MENU_ITEMS} />
                <MenuHeaderRight />
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
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2), inset 0 0 0 0 rgba(255, 255, 255, 0.5);

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
};

export default Layout;
