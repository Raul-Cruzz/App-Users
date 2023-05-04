import styled from "styled-components";

export const ContainerItens = styled.div `

    background: linear-gradient(157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%, 
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;

    padding: 50px 36px;

    display: flex;
    flex-direction: column;

    height: 100vh;

    #StyledLink { 

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #ffffff;
    margin-left:10px;
    margin-top: 10px;

    }

    ${ prosp => prosp.isBlur && `

    backdrop-filter: blur(22.5px);
    min-height: calc(100vh - 170px);
    
    `}
`;