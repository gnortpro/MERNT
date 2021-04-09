import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';

import theme from 'theme';
import { CustomIcon } from 'component/customIcon';
import { IconType } from 'component/customIcon/consts';
import { Space } from 'component/space';

import { Avatar } from './avatar';
import { CreateMenu } from './create';
import { MessageMenu } from './message';
import { NotificationMenu } from './notifications';
import { SettingMenu } from './settings';

export interface MenuItem {
    icon?: IconType;
    path?: string;
}

interface Props {
    menuItems?: MenuItem[];
}

export const MenuHeaderRight: React.FC<Props> = ({ menuItems }) => {
    const router = useRouter();

    return (
        <div className="rightMenu">
            <Avatar isActive={true} name="Trong" avatar="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/158597641_1583362465190852_3413763022710821754_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xMBO-5mYDccAX_5eMt9&_nc_ht=scontent.fhan3-1.fna&oh=f885ade8e2162f0f3ba489e8745b9c33&oe=60978B4B" />

            <Space space={10} />

            <CreateMenu />

            <Space space={5} />

            <MessageMenu />

            <Space space={5} />

            <NotificationMenu />

            <Space space={5} />

            <SettingMenu />

            <style jsx>{`
                .rightMenu {
                    width: 500px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </div>
    );
};
