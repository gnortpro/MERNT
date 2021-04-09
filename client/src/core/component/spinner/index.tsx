import React from 'react';
import cx from 'classnames';

import styles from './styles';

const SIZE = { xl: 48, l: 32, m: 20, s: 16 };

export type SpinnerColor = 'light' | 'dark' | 'warning';
export type SpinnerSize = keyof typeof SIZE;

interface Props {
    color?: SpinnerColor;
    size?: SpinnerSize;
    duration?: number;
}

const Spinner: React.FC<Props> = ({ duration = 1200, size = 'm', color = 'light' }) => {
    return (
        <svg className={cx('spinner', size, color)} viewBox={`0 0 ${SIZE[size]} ${SIZE[size]}`}>
            <circle className="path" fill="none"></circle>

            <style jsx>{styles}</style>
            <style jsx>
                {`
                    .spinner {
                        animation-duration: ${duration}ms;
                    }
                `}
            </style>
        </svg>
    );
};

export default Spinner;
