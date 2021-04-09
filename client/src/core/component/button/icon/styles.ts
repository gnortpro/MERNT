import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
    .iconButton {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background-color: transparent;
        transition-property: background-color, color;
        transition-duration: ${theme.animSpeed.extraFast};
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        ${theme.typo.T14_M}

        &:hover:not(:disabled) {
            background-color: ${theme.color.ink[200]};
        }

        &:disabled {
            cursor: not-allowed;
            /* Workaround for disabled button mouseleave event bug on Chrome/Safari */
            /* https://github.com/facebook/react/issues/4251#issuecomment-267004045 */
            pointer-events: none;
        }
    }
`;
