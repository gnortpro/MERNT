import React from 'react';

interface Props {
    space?: number;
    dimension?: 'vertical' | 'horizontal';
}

export const Space: React.FC<Props> = ({ space, dimension = 'vertical' }) => {
    return (
        <div className={dimension}>
            <style jsx>{`
                .vertical {
                    width: ${space}px;
                }
                .horizontal {
                    height: ${space}px;
                }
            `}</style>
        </div>
    );
};
