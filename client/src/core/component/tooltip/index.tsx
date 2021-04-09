import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import React, { useState, memo, ReactNode, useCallback, useMemo, useEffect } from 'react';
import { Placement, PositioningStrategy } from '@popperjs/core';
import { usePopper } from 'react-popper';
import cx from 'classnames';

import styles from './styles';

type TooltipMode = 'dark' | 'light';

const SIZE = {
    m: 232,
    l: 364,
};

interface Props {
    content: ReactNode;
    mode?: TooltipMode;
    className?: string;
    anchorClassName?: string;
    size?: keyof typeof SIZE;
    strategy?: PositioningStrategy;
    placement?: Placement;
    offset?: number;
}

export const Tooltip: React.FC<Props> = memo(
    ({
        content,
        children,
        className,
        anchorClassName,
        size = 'm',
        offset = 12,
        mode = 'dark',
        placement = 'auto',
        strategy = 'absolute',
    }) => {
        const [isShow, setIsShow] = useState(false);
        const [arrowEl, setArrowEl] = useState<HTMLDivElement>(null);
        const [anchorEl, setAnchorEl] = useState<HTMLDivElement>(null);
        const [popperEl, setPopperEl] = useState<HTMLDivElement>(null);
        const isValidContent = Boolean(content || content === 0);
        const child = useMemo(() => React.Children.only(children) as React.ReactElement, [children]);
        const { styles: popperStyles, attributes } = usePopper(anchorEl, popperEl, {
            strategy,
            placement,
            modifiers: [
                { name: 'arrow', options: { element: arrowEl, padding: 4 } },
                { name: 'offset', options: { offset: [0, offset] } },
            ],
        });

        const handleMouseEnter = useCallback(() => setIsShow(true), []);
        const handleMouseLeave = useCallback(() => setIsShow(false), []);

        useEffect(() => {
            if (!isValidContent) setIsShow(false);
        }, [isValidContent]);

        return (
            <>
                {isValidContent ? (
                    <div
                        className={cx('tooltipAnchor', anchorClassName)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={setAnchorEl}>
                        {child}
                    </div>
                ) : (
                    child
                )}

                {isValidContent &&
                    ReactDOM.createPortal(
                        <CSSTransition classNames="tooltip" in={isShow} timeout={200} unmountOnExit>
                            <div
                                id="tooltip"
                                ref={setPopperEl}
                                style={popperStyles.popper}
                                className={cx('tooltip', className, mode, size)}
                                {...attributes.popper}>
                                {content}
                                <div id="arrow" data-popper-arrow ref={setArrowEl} style={popperStyles.arrow} />

                                <style jsx>{styles}</style>
                                <style jsx>
                                    {`
                                        #tooltip {
                                            &.${size} {
                                                max-width: ${SIZE[size]}px;
                                            }
                                        }
                                    `}
                                </style>
                            </div>
                        </CSSTransition>,
                        document.body,
                    )}
            </>
        );
    },
);
