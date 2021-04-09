import React from 'react';
import cx from 'classnames';

import { IconType, ModeType, SizeType } from 'core/component/customIcon/consts';
import { CustomIcon } from 'core/component/customIcon';
import theme from 'theme';

import styles from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    className?: string;
    iconType: IconType;
    iconMode?: ModeType;
    iconSize?: SizeType;
}

const IconBtn: React.FC<Props> = ({ iconType, iconMode, iconSize, className, color, ...props }) => {
    const { disabled } = props;

    return (
        <button className={cx('iconButton', className)} type="button" {...props}>
            {iconType && <CustomIcon type={iconType} mode={iconMode} size={iconSize} />}

            <style jsx>{styles}</style>
            <style jsx>
                {`
                    .iconButton {
                        color: ${disabled ? theme.color.ink[300] : color || theme.color.ink[400]};
                    }
                `}
            </style>
        </button>
    );
};

export default IconBtn;
