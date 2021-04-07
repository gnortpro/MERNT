interface TypoProps {
    size: number;
    height: number;
    weight: 'normal' | 500;
}

export const getTypo = ({ size, height, weight }: TypoProps): string => `
    line-height: ${height}px;
    font-weight: ${weight};
    font-size: ${size}px;
`;
