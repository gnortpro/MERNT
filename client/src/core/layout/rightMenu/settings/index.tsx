import React from 'react';

interface Props {
    avatar?: string;
    username?: string;
    name?: string;
}

export const SettingMenu: React.FC<Props> = ({ avatar, username, name }) => {
    return <div className="avatar">
        Avatar
    </div>;
};
