import React, { useState } from 'react';
import cx from 'classnames';

import theme from 'theme';
import { CustomIcon } from 'component/customIcon';

export const SearchHeader: React.FC = () => {
    const [onInputSearch, setInputSearch] = useState(false);

    const handleInputClick = () => setInputSearch(true);

    const handleBackClick = () => setInputSearch(false);

    const handleInputSearch = () => setInputSearch(current => !current);

    return (
        <div className={cx('leftMenu', { searching: onInputSearch })}>
            <div className="searchWrapper">
                <div className="backContainer">
                    <div className="back" onClick={handleBackClick}>
                        <CustomIcon type="arrow_back" size="l" />
                    </div>
                </div>

                <div className="searchInput">
                    <input
                        type="text"
                        placeholder="Search small..."
                        onClick={handleInputClick}
                        onBlur={handleInputSearch}
                    />
                    <div className="iconSearch">
                        <CustomIcon type="search_loupe" size="l" color={theme.color.ink[500]} />
                    </div>
                </div>
            </div>

            <div className="searchResult">djaskdjsakdjsak</div>

            <style jsx>{`
                .leftMenu {
                    width: 360px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;

                    &.searching {
                        transition-property: box-shadow;
                        transition-duration: 200ms;
                        transition-timing-function: linear;
                        position: relative;

                        .searchWrapper {
                            box-shadow: 3px 5px 6px -2px rgba(0, 0, 0, 0.11);
                            border-top-left-radius: 10px;

                            .backContainer {
                                .back {
                                    opacity: 1;
                                }
                            }
                        }

                        .searchResult {
                            opacity: 1;
                            height: 100px;
                            position: absolute;
                            background: white;
                            width: 100%;
                            top: 56px;
                            left: 0;
                            border-bottom-right-radius: 10px;
                            border-bottom-left-radius: 10px;
                            box-shadow: 3px 5px 6px -2px rgba(0, 0, 0, 0.11);
                        }
                    }

                    .searchWrapper {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: 8px 16px;

                        .backContainer {
                            width: 30px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-right: 5px;

                            .back {
                                opacity: 0;
                                transition-property: opacity;
                                transition-duration: 200ms;
                                transition-timing-function: linear;
                                cursor: pointer;
                                padding: 5px;

                                &:hover {
                                    background-color: ${theme.color.backgroundDark};
                                    border-radius: 50px;
                                }
                            }
                        }

                        .searchInput {
                            position: relative;

                            .iconSearch {
                                position: absolute;
                                left: 8px;
                                top: 8px;
                            }

                            input {
                                padding-left: 35px;
                                border-radius: 50px;
                                background-color: ${theme.color.backgroundDark};
                                outline: none;
                                border: none;
                                height: 40px;
                            }
                        }
                    }

                    .searchResult {
                        opacity: 0;
                        transition-property: opacity;
                        transition-duration: 200ms;
                        transition-timing-function: linear;
                    }
                }
            `}</style>
        </div>
    );
};
