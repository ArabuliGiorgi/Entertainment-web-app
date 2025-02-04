import styled from "styled-components";

const Input = styled.input<{error: string}>`
    height: 55px;
    width: 100%;
    outline: none;
    border-bottom: 1px solid ${props => props.error === "true" ? "#FC4747" : "#5A698F"};
    padding-left: 16px;

    font-size: 15px;
    font-weight: 400;
    line-height: 18.9px;
    text-align: left;
    color: white;

    &::placeholder{
        font-size: 15px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
        color: white;
        opacity: 50%;
    }
    &:focus{
        border-bottom: 1px solid #FFFFFF;
    }
`

const LgnButton = styled.button`
    height: 48px;
    width: 100%;
    border-radius: 6px;
    background-color: #FC4747;
    margin-bottom: 24px;

    h1{
        font-size: 15px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: center;
        color: #FFFFFF;
    }

    @media only screen and (min-width: 1024px){
        transition: all ease 0.2s;
        cursor: pointer;

        h1{
            transition: all ease 0.2s;
        }

        &:hover{
            background-color: #FFFFFF;

            h1{
                color: #161D2F;
            }
        }
    }
`

const HeaderFont = styled.h1`
    font-size: 20px;
    font-weight: 400;
    line-height: 25.2px;
    letter-spacing: -0.3125px;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 16px;
    padding-left: 16px;

    @media only screen and (min-width: 768px){
        font-size: 32px;
        line-height: 40.32px;
        letter-spacing: -0.5px;
        margin-bottom: 24px;
        padding-left: 24px;
    }
    @media only screen and (min-width: 1024px){
        margin-bottom: 32px;
        padding-left: 0;
    }
`

const TrendingDiv = styled.div`
    position: relative;
    flex: none;
    margin-right: 16px;

    .play{
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 117px;
        height: 48px;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 29px;
        transform: translate(-50%, -50%);
        padding-left: 9px;
        padding-right: 24px;
        align-items: center;
        justify-content: space-between;
        z-index: 1;

        img{
            height: 30px;
        }
        h1{
            font-size: 18px;
            font-weight: 400;
            line-height: 22.68px;
            color: white;
        }
    }

    @media only screen and (min-width: 1024px){
        margin-right: 40px;
        cursor: pointer;

        &:hover::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background-color: #00000080;
        }
        &:hover .play{
            display: flex;
        }
    }
`

const ImageHover = styled.div`
    cursor: pointer;

    .play{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        width: 117px;
        height: 48px;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 29px;
        padding-left: 9px;
        padding-right: 24px;
        align-items: center;
        justify-content: space-between;
        z-index: 1;

        img{
            height: 30px;
        }
        h1{
            font-size: 18px;
            font-weight: 400;
            line-height: 22.68px;
            color: white;
        }
    }

    @media only screen and (min-width: 1024px){
        position: relative;

        &:hover::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background-color: #00000080;
        }
        &:hover .play{
            display: flex;
        }
    }
`

export {Input, LgnButton, HeaderFont, TrendingDiv, ImageHover};