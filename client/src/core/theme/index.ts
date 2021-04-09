import { getTypo } from './utils';

const color = {
    primary: {
        600: '#0F49BD',
        500: '#1B5CF3',
        400: '#5989FF',
        300: '#C1D3FF',
        200: '#EAF0FF',
        100: '#F5F8FF',
    },
    ink: {
        500: '#22313F',
        400: '#636C79',
        300: '#B3B8BD',
        200: '#E1E2E5',
        100: '#F2F3F4',
    },
    inkTrans: {
        400: 'rgba(1, 18, 34, 0.5)',
        300: 'rgba(1, 18, 34, 0.3)',
        200: 'rgba(1, 18, 34, 0.16)',
        100: 'rgba(1, 18, 34, 0.05)',
    },
    black: {
        500: '#333333',
        400: '#4D4D4D',
        300: '#999999',
        200: '#B3B3B3',
        100: '#E6E6E6',
    },
    white: {
        500: '#FFFFFF',
        400: 'rgba(255, 255, 255, 0.7)',
        300: 'rgba(255, 255, 255, 0.4)',
        200: 'rgba(255, 255, 255, 0.3)',
        100: 'rgba(255, 255, 255, 0.1)',
    },
    blue: {
        600: '#0F45B3',
        500: '#2A66F4',
        400: '#5989FF',
        300: '#C1D3FF',
        200: '#EAF0FF',
        100: '#F5F8FF',
    },
    green: {
        600: '#08782D',
        500: '#00BC3C',
        400: '#33C963',
        300: '#B3EBC5',
        200: '#E6F8EC',
        100: '#F2FCF5',
    },
    orange: {
        600: '#9D4906',
        500: '#FF821E',
        400: '#FF9B4B',
        300: '#FFDABC',
        200: '#FFF3E9',
        100: '#FFF9F4',
    },
    red: {
        600: '#9B0808',
        500: '#E60A32',
        400: '#E82727',
        300: '#FFB5B5',
        200: '#FCE7E7',
        100: '#FEF3F5',
    },
    border: '#E1E2E5',
    brandRed: '#DC2323',
    brandBlue: '#355587',
    facebook: '#355587',
    yellow: '#FEB300',
    backgroundLight: '#F9F9F9',
    backgroundDark: '#F0F2F5',
    placeholder: '#E8EDF3',
    skeleton: 'linear-gradient(270deg, #E6E7E9 0%, #F9F9F9 98.12%)',
};

const animSpeed = {
    extraFast: '90ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    extraSlow: '500ms',
};

const typo = {
    T48_M: getTypo({ size: 48, weight: 500, height: 56 }),
    T48_R: getTypo({ size: 48, weight: 'normal', height: 56 }),
    T30_M: getTypo({ size: 30, weight: 500, height: 38 }),
    T30_R: getTypo({ size: 30, weight: 'normal', height: 38 }),
    T24_M: getTypo({ size: 24, weight: 500, height: 32 }),
    T24_R: getTypo({ size: 24, weight: 'normal', height: 32 }),
    T20_M: getTypo({ size: 20, weight: 500, height: 28 }),
    T20_R: getTypo({ size: 20, weight: 'normal', height: 28 }),
    T16_M: getTypo({ size: 16, weight: 500, height: 24 }),
    T16_R: getTypo({ size: 16, weight: 'normal', height: 24 }),
    T16_M_20: getTypo({ size: 16, weight: 500, height: 20 }),
    T16_R_20: getTypo({ size: 16, weight: 'normal', height: 20 }),
    T14_M: getTypo({ size: 14, weight: 500, height: 20 }),
    T14_R: getTypo({ size: 14, weight: 'normal', height: 20 }),
    T12_M: getTypo({ size: 12, weight: 500, height: 16 }),
    T12_R: getTypo({ size: 12, weight: 'normal', height: 16 }),
    T10_M: getTypo({ size: 10, weight: 500, height: 12 }),
    T10_R: getTypo({ size: 10, weight: 'normal', height: 12 }),
};

const shadow = {
    4: `0px 2px 4px ${color.inkTrans[200]}`,
    8: `0px 2px 8px ${color.inkTrans[200]}`,
    revert: `0px -2px 4px ${color.inkTrans[200]}`,
};

const borderRadius = {
    18: '18px',
};

const theme = {
    typo,
    color,
    borderRadius,
    shadow,
    animSpeed,
};

export default theme;
