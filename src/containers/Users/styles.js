import styled from "styled-components";

import Background from "../../assets/image-secundaria.svg";


export const Container = styled.div `

    background: url( "${Background}");
    background-size: cover;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
    


`;

export const Image = styled.img `

    margin-top:30px;

`;

export const ContainerItens = styled.div `

    background: linear-gradient(157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%, 
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(22.5px);

    padding: 50px 36px;

    display: flex;
    flex-direction: column;

    height: 100vh;
    min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1 `
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 40px;

`;

/*export const InputLabel = styled.p `


    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left:25px;

`;

export const Input = styled.input `

    width: 342px;
    height: 58px;
    border:none;
    outline:none;
    padding-left:25px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-bottom:34px;
    color: #FFFFFF;

`;*/

export const Button = styled.button `

    width: 342px;
    height: 74px;

    
    background: transparent;
    border-radius: 14px;
    border:1px solid #ffffff;
    margin-top:120px;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    img {
        transform: rotateY(180deg);
    }
    
`;

export const User = styled.li `

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:20px;

    width: 342px;
    height: 58px;

    border:none;
    outline:none;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    p {

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;

    }

    button {

        background: none;
        border: none;
        cursor:pointer;
        
    }
`