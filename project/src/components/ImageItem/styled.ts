import styled from 'styled-components';

const LiS = styled.li`
    cursor: pointer;
    background-color: var(--grey7);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 180px;
    width: 100%;
    padding: 1rem;

    margin-bottom: 50px;

    img {
        width: 100%;
    }
`;

export default LiS;
