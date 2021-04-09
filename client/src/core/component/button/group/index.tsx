import React, { useState } from 'react';
import cx from 'classnames';

import { IconType, ModeType, SizeType } from 'core/component/customIcon/consts';
import { CustomIcon } from 'core/component/customIcon';
import { Tooltip } from 'component/tooltip';
import styles from './styles';

type ValueType = string | number;

export interface ButtonGroupOption {
    tooltip?: React.ReactNode;
    value: ValueType;
    label?: string;
    disabled?: boolean;
    iconType?: IconType;
    iconMode?: ModeType;
    size?: SizeType;
}

interface Props {
    size?: 's' | 'm';
    selected?: ValueType;
    onChange?: (value: ValueType) => void;
    options: ButtonGroupOption[];
    fixedWidth?: boolean;
}

const GroupBtn: React.FC<Props> = ({ options, selected, fixedWidth, size = 'm', onChange }) => {
    const [state, setState] = useState(selected);
    const selfValue = selected ?? state;

    const handleClick = (value: ValueType) => () => {
        if (value === selfValue) return;
        if (onChange) onChange(value);
        setState(value);
    };

    return (
        <div className={cx('groupButton', size, { fixedWidth: !!fixedWidth })}>
            {options.map(({ value, label, disabled, tooltip, iconType, iconMode, size: iconSize }) => (
                <button
                    key={value}
                    type="button"
                    disabled={disabled}
                    onClick={handleClick(value)}
                    className={cx({ active: selfValue === value })}>
                    {iconType && <CustomIcon type={iconType} mode={iconMode} size={iconSize} />}
                    {label && <span className="label">{label}</span>}
                    {tooltip && (
                        <Tooltip content={tooltip} placement="bottom">
                            <div />
                        </Tooltip>
                    )}
                </button>
            ))}

            <style jsx>{styles}</style>
        </div>
    );
};

export default GroupBtn;
