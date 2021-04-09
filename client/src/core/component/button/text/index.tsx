import React from 'react';
import cx from 'classnames';

import styles from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Text: React.FC<Props> = ({ className, children, ...props }) => {
    return (
        <button className={cx('textButton', className)} type="button" {...props}>
            {children}

            <style jsx>{styles}</style>
        </button>
    );
};

export default Text;
