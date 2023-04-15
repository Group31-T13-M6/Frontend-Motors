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
                & > img {
                    width: 80%;
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
    @media (min-width: 390px) {
    }
    @media (min-width: 1200px) {
    }
`;

export default MainS;
