import css from 'styled-jsx/css';
import theme from 'theme';

const BORDER = `1px solid ${theme.color.border}`;

export default css`
    .groupButton {
        display: flex;

        &.fixedWidth {
            width: 100%;

            button {
                flex: 1;
            }
        }

        &.s {
            height: 32px;
        }

        &.m {
            height: 40px;
        }

        button + button {
            margin-left: -1px;
        }

        button {
            height: 100%;
            padding: 0 16px;
            border: ${BORDER};
            position: relative;
            background-color: white;
            color: ${theme.color.ink[400]};
            transition-property: color, border-color, background-color;
            transition-duration: ${theme.animSpeed.extraFast};
            ${theme.typo.T14_R}

            :global(svg + .label) {
                margin-left: 4px;
                display: inline-block;
            }

            &:disabled {
                cursor: not-allowed;
                color: ${theme.color.ink[300]};
                background-color: ${theme.color.ink[100]};
                /* Workaround for disabled button mouseleave event bug on Chrome/Safari */
                /* https://github.com/facebook/react/issues/4251#issuecomment-267004045 */
                pointer-events: none;
            }

            &:hover:not(:disabled) {
                color: ${theme.color.primary[500]};
            }

            &.active:not(:disabled) {
                background-color: ${theme.color.primary[100]};
                border-color: ${theme.color.primary[500]};
                color: ${theme.color.primary[500]};
                position: relative;
                cursor: default;
                z-index: 1;
                ${theme.typo.T14_M}
            }

            &:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }

            &:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }

            :global(.tooltipAnchor) {
                width: 100%;
                height: 100%;
                background-color: transparent;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
`;
