import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';

import theme from 'theme';
import { CustomIcon } from 'component/customIcon';
import { IconType } from 'component/customIcon/consts';

export interface MenuItem {
    icon?: IconType;
    path?: string;
}

interface Props {
    menuItems?: MenuItem[];
}

export const MenuHeaderCenter: React.FC<Props> = ({ menuItems }) => {
    const router = useRouter();

    return (
        <div className="centerMenu">
            <div className="menuWrapper">
                {menuItems.map(url => (
                    <Link key={url.icon} href={url.path}>
                        <a className={cx({ active: router.pathname === url.path })}>
                            <span>
                                <CustomIcon
                                    type={url.icon}
                                    color={
                                        router.pathname === url.path ? theme.color.primary[500] : theme.color.ink[500]
                                    }
                                />
                            </span>
                        </a>
                    </Link>
                ))}
            </div>

            <style jsx>{`
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
                            margin-right: 10px;

                            &:hover {
                                background-color: ${theme.color.backgroundLight};
                                border-radius: 5px;
                                margin-top: 5px;
                                margin-bottom: 5px;
                            }

                            &.active {
                                border-bottom: 2px solid ${theme.color.primary[500]};

                                &:hover {
                                    background-color: white;
                                    border-radius: unset;
                                    margin-top: unset;
                                    margin-bottom: unset;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
};
