import css from 'styled-jsx/css';
import theme from 'theme';

export default css`
    #tooltip {
        width: auto;
        z-index: 10000;
        max-width: 364px;
        padding: 8px 12px;
        border-radius: 4px;
        box-shadow: ${theme.shadow[8]};
        ${theme.typo.T12_R}
        pointer-events: none;

        #arrow {
            position: absolute;
            width: 16px;
            height: 16px;
            z-index: -1;

            &::before {
                content: '';
                z-index: -1;
                transform: rotate(45deg);
                border-radius: 2px;
                position: absolute;
                height: 16px;
                width: 16px;
            }
        }

        /* This after is to hide the rest of the arrow's body */
        &::after {
            content: '';
            position: absolute;
            border-radius: 20px;
            z-index: 1;
        }

        &.dark {
            color: white;
            background-color: ${theme.color.ink[500]};

            &::after,
            #arrow::before {
                background-color: ${theme.color.ink[500]};
            }
        }

        &.light {
            color: ${theme.color.ink[500]};
            background-color: white;

            &::after,
            #arrow::before {
                background-color: white;
            }
        }

        &[data-popper-placement^='top'] {
            &::after {
                width: 100%;
                height: 8px;
                bottom: 0;
                left: 0;
            }

            #arrow {
                bottom: -4px;

                &::before {
                    box-shadow: 2px 2px 8px rgba(1, 18, 34, 0.08);
                }
            }
        }

        &[data-popper-placement^='bottom'] {
            &::after {
                width: 100%;
                height: 8px;
                left: 0;
                top: 0;
            }

            #arrow {
                top: -4px;

                &::before {
                    box-shadow: -2px -2px 8px rgba(1, 18, 34, 0.08);
                }
            }
        }

        &[data-popper-placement^='left'] {
            &::after {
                width: 12px;
                height: 100%;
                right: 0;
                top: 0;
            }

            #arrow {
                right: -4px;

                &::before {
                    box-shadow: 2px 0px 8px rgba(1, 18, 34, 0.08);
                }
            }
        }

        &[data-popper-placement^='right'] {
            &::after {
                width: 12px;
                height: 100%;
                left: 0;
                top: 0;
            }

            #arrow {
                left: -4px;

                &::before {
                    box-shadow: 0px 2px 8px rgba(1, 18, 34, 0.08);
                }
            }
        }

        &.tooltip-enter {
            opacity: 0;
        }

        &.tooltip-enter-active {
            transition: opacity ${theme.animSpeed.normal};
            opacity: 1;
        }

        &.tooltip-exit {
            opacity: 1;
        }

        &.tooltip-exit-active {
            transition: opacity ${theme.animSpeed.normal};
            opacity: 0;
        }
    }
`;
