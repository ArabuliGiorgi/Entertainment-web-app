import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    height: 56px;
    background-color: #161D2F;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .list{
        width: 134px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg{
            width: 16px;
            height: 16px;
        }
    }
    .avatar{
        height: 24px;
        border: 1px solid #FFFFFF;
        border-radius: 50%;
    }

    @media only screen and (min-width: 768px){
        height: 72px;
        padding: 0 24px;
        border-radius: 10px;

        .list{
            width: 173px;

            svg{
                width: 20px;
                height: 20px;
            }
        }
        .avatar{
            height: 32px;
        }
    }
    @media only screen and (min-width: 1024px){
        width: 96px;
        height: 100%;
        padding: 36px 0;
        flex-direction: column;
        justify-content: start;
        position: relative;
        gap: 75px;
        border-radius: 20px;
        
        .list{
            width: auto;
            height: 200px;
            flex-direction: column;

            svg{
                width: 20px;
                height: 20px;
            }
        }
        .avatar{
            height: 40px;
            position: absolute;
            bottom: 32px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
`

const Search = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 24px;

    img{
        height: 24px;
    }
    input{
        width: 100%;
        outline: none;

        font-size: 16px;
        font-weight: 400;
        line-height: 20.16px;
        text-align: left;
        color: #FFFFFF;

        &::placeholder{
            font-size: 16px;
            font-weight: 400;
            line-height: 20.16px;
            text-align: left;
            color: #FFFFFF;
            opacity: 50%;
        }
    }

    @media only screen and (min-width: 768px){
        gap: 24px;
        margin-bottom: 33px;

        img{
            height: 32px;
        }
        input{
            font-size: 24px;
            line-height: 30.24px;

            &::placeholder{
                font-size: 24px;
                line-height: 30.24px;
            }
        }
    }
`

const TrendingImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 8px 8px 16px 16px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    .mark{
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: rgba(16, 20, 30, 0.5);

        .fill{
            path{
                fill: #FFF;
            }
        }
        .stroke{
            path{
                stroke: #FFF;
            }
        }
        &:hover{
            background-color: white;
        }
        &:hover .fill{
            path{
                fill: #10141E;
            }
        }
        &:hover .stroke{
            path{
                stroke: #10141E;
            }
        }
    }
    .info{
        width: 100%;

        .details{
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            opacity: 75%;

            svg{
                width: 12px;
                height: 12px;
                margin-right: 8px;
            }
            h1{
                font-size: 12px;
                font-weight: 400;
                line-height: 15.12px;
                text-align: left;
                color: white;

                span{
                    margin: 0 8px;
                }
            }
        }
        .title{
            font-size: 15px;
            font-weight: 400;
            line-height: 18.9px;
            text-align: left;
            color: white;
        }
    }

    @media only screen and (min-width: 768px){
        padding: 16px 24px 24px;

        .info{
            .details{
                margin-bottom: 3px;

                svg{
                    margin-right: 6px;
                }
                h1{
                    font-size: 15px;
                    line-height: 18.9px;
                }
            }
            .title{
                font-size: 24px;
                line-height: 30.24px;
            }
        }
    }
`

const SingleMovieDiv = styled.div`
    position: relative;
    width: 100%;
    max-width: 164px;
    margin-bottom: 16px;

    .mark{
        position: absolute;
        top: 8px;
        right: 8px;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: rgba(16, 20, 30, 0.5);
        cursor: pointer;

        .fill{
            path{
                fill: #FFF;
            }
        }
        .stroke{
            path{
                stroke: #FFF;
            }
        }
        &:hover{
            background-color: white;
        }
        &:hover .fill{
            path{
                fill: #10141E;
            }
        }
        &:hover .stroke{
            path{
                stroke: #10141E;
            }
        }
    }
    .info{
        width: 100%;

        .details{
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            opacity: 75%;

            svg{
                width: 10px;
                height: 10px;
                margin-right: 4px;
            }
            h1{
                font-size: 11px;
                font-weight: 400;
                line-height: 13.86px;
                text-align: left;
                color: white;

                span{
                    margin: 0 6px;
                }
            }
        }
        .title{
            font-size: 14px;
            font-weight: 400;
            line-height: 17.64px;
            text-align: left;
            color: white;
        }
    }

    @media only screen and (min-width: 768px){
        margin-bottom: 24px;
        max-width: 220px;

        .mark{
            top: 16px;
            right: 16px;
        }
        .info{
            .details{
                margin-bottom: 5px;

                svg{
                    width: 12px;
                    height: 12px;
                    margin-right: 6px;
                }
                h1{
                    font-size: 13px;
                    line-height: 16.38px;

                    span{
                        margin: 0 8px;
                    }
                }
            }
            .title{
                font-size: 18px;
                line-height: 22.68px;
            }
        }
    }
    @media only screen and (min-width: 1024px){
        max-width: 280px;
    }
`

export {Header, Search, TrendingImage, SingleMovieDiv}