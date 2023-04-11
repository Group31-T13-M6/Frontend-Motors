import styled from "styled-components";

const CardUl = styled.ul `
    list-style: none;
    
    li {
        padding: 10px;
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .img-Wrapper {
        background: var(--grey7);
        width: 100%;
        text-align: center;
    }

    .car-mainInfo {
        text-align: justify;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .car-advertiser {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .car-lowInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .car-lowInfo-text {
        display: flex;
        gap: 10px;
    }
    
    .car-lowInfo-text p {
        background: var(--brand4);
        padding: 10px;
    }
`

export default CardUl