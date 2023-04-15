import styled from 'styled-components';

const LiS = styled.li`
    cursor: pointer;
    background-color: var(--grey7);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 75px;
    height: 75px;

    margin-bottom: 50px;

    img {
        width: 80%;
    }
    @media (min-width: 390px) {
        width: 97px;
        height: 97px;
    }
    @media (min-width: 1200px) {
        width: 108px;
        height: 108px;
    }
`;

export default LiS;
