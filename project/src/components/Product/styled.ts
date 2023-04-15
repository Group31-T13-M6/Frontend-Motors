import styled from 'styled-components';

const MainS = styled.main`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--grey8);

    section:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:first-child {
            background-color: var(--brand1);
            height: 436px;
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            & > div {
                background-color: var(--grey10);

                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;

                margin-top: 45px;

                max-width: 752px;
                width: 95%;
                height: 355px;
                img {
                    width: 77%;
                }
            }
        }

        & > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            background-color: var(--grey10);
            border-radius: 4px;

            width: 95%;
            max-width: 752px;
            height: 326.91px;
            padding: 28px;

            margin-top: -20px;
            & > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                height: 89.91px;

                & > div {
                    width: 120px;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    span {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        padding: 4px 8px;
                        border-radius: 4px;

                        background-color: var(--brand4);
                    }
                }
            }
            button {
                background-color: var(--brand1);
                color: var(--whiteFixed);
            }
        }

        & > div:nth-child(3) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            background-color: var(--grey10);
            border-radius: 4px;

            width: 95%;
            max-width: 752px;
            margin-top: 24px;
            padding: 36px 28px;

            h6 {
                margin-bottom: 32px;
            }
        }
    }

    section:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:first-child {
            width: 95%;
            max-width: 440px;
            max-height: 377px;

            background-color: var(--grey10);
            padding: 36px 28px;

            ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 3px;

                margin-top: 32px;
            }
        }
    }

    @media (min-width: 1240px) {
        background: linear-gradient(
            to bottom,
            var(--brand1) calc(100% - 327px),
            var(--grey8) calc(100% - 516px)
        );
        flex-direction: row;
        justify-content: center;

        section:first-child {
            & > div:first-child {
                background-color: unset;
                height: 516px;

                & > div {
                }
            }
            & > div:nth-child(2) {
                margin-top: -92px;
                height: 239.39px;
                padding: 28px 44px;
                & > div {
                    flex-direction: row;
                    align-items: center;
                }
            }
        }
        section:nth-child(2) {
            margin-top: 45px;
            & > div:first-child {
                padding: 36px 44px;
            }
        }
    }
`;

export default MainS;
