import styled from "styled-components";

export const Section = styled.section`
    text-align: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    
    .intro-img {
        position: relative;
    }
    
    .intro-text {
        display: flex;
        flex-direction: column;
        top: 50px;
        bottom: 50px;
        transform: translate(25%, 50%);
        position: absolute;
    }
`

export const Separator = styled.div`
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
    padding: 60px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
`

export const Main = styled.main`
`