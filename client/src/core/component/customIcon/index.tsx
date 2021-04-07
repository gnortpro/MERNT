import React, { memo, useMemo } from 'react';
import dynamic from 'next/dynamic';
import cx from 'classnames';

import { Skeleton } from 'core/component/skeleton';
import { DEFAULT, IconType, ModeType, SIZE, SizeType } from './consts';

interface Props {
    type: IconType;
    size?: SizeType;
    className?: string;
    mode?: ModeType;
    color?: string;
}

export const CustomIcon: React.FC<Props> = memo(
    ({ type, className, color = DEFAULT.COLOR, size = 'm', mode = 'outline' }) => {
        const isLogo = mode === 'logo';
        const sizeOption = useMemo(() => SIZE, []);
        const modeOption = useMemo(() => (isLogo ? '' : `_${mode}`), [mode, isLogo]);

        const DynamicIcon = useMemo(
            () =>
                dynamic<React.SVGProps<SVGSVGElement>>(
                    () => import(`assets/ic_${sizeOption[size]}system${modeOption}_${type}.svg`),
                    { loading: () => <Skeleton.Icon className={className} size={size} /> },
                ),
            [type, modeOption, sizeOption, size, className],
        );

        return (
            <>
                <DynamicIcon className={cx('icon', className, size, mode)} />

                <style jsx>
                    {`
                        svg {
                            display: inline-block;
                            vertical-align: middle;
                            color: ${color};

                            &:not(.logo) :global(path) {
                                fill: currentColor;
                            }

                            &.${size} {
                                width: ${SIZE[size]}px;
                                height: ${SIZE[size]}px;
                            }
                        }
                    `}
                </style>
            </>
        );
    },
);
