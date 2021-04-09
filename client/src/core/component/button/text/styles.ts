import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
    .textButton {
        height: 40px;
        display: flex;
        padding: 0 8px;
        align-items: center;
        justify-content: center;
        color: ${theme.color.ink[500]};
        ${theme.typo.T14_M}

        &:hover {
            text-decoration: underline;
        }
    }
`;
