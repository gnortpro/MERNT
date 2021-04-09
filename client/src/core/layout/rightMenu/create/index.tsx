import { Button } from 'component/button';
import React from 'react';

interface Props {
    avatar?: string;
    username?: string;
    name?: string;
}

export const CreateMenu: React.FC<Props> = ({ avatar, username, name }) => {
    return <div className="createMenu"></div>;
};
