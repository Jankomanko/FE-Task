import styled, {css} from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #ffffff;
    padding: 0 4rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
    width: 100%;

    @media (max-width: 610px){
        padding: 1rem;
    }

    .footer-container-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: rgb(247, 195, 52);
        border-radius: 30px;
        height: 100%;
        width: 100%;
        z-index: 2;

        .trail-left{
            position: absolute;
            bottom: 8rem;
            left: 0.5rem;
            height: 20rem;
            width: auto;
            z-index: 1;
        }

        .trail-right{
            position: absolute;
            top: 0;
            right:  0.5rem;
            height: 23rem;
            width: auto;
            z-index: 1;
        }

        .svg-plane{
            position: absolute;
            z-index: 1;
            left: 23.5rem;
            top: 12rem;
        }

        .svg-location{
            position: absolute;
            z-index: 1;
            right: 13rem;
            bottom: 7.5rem;
        }

        svg{
            @media (max-width: 899px){
                display: none;;
            }
        }

        .footer-subscription-heading{
            font-size: 2.8rem;
            font-weight: 600;
            color: $dark-text;

            @media (max-width: 610px){
                font-size: 2rem;
            }
        }

        .footer-subscription-text{
            font-weight: 400;
            margin-bottom: 2rem;
            color: $dark-text;
            z-index: 2;

            @media (max-width: 610px){
                padding: 0.5rem 2rem;
            }
        }

        .input-areas{
            background-color: #fff;
            padding-right: 1rem;
            border-radius: 10px;
            z-index: 2;

            .form-container{
                display: flex;
                align-items: center;
                justify-content: center;

                .footer-input {
                    padding: 8px 20px;
                    border-radius: 10px;
                    outline: none;
                    border: 1px solid #fff;
                    width: 30vw;
                    height: 4rem;
                    z-index: 2;

                    @media (max-width: 610px){
                        width: 100%;
                        height: 3.5rem;
                    }

                    &::placeholder {
                        color: rgba(91, 95, 98, 1);
                        font-weight: 400;
                        font-size: 1rem;

                        @media (max-width: 899px){
                            font-size: 0.8rem;
                        }

                        @media (max-width: 610px){
                            font-size: 0.7rem;
                        }
                    }

                }
            }

            a{
                font-size: 1.1rem;
                text-decoration: none;
                background-color: #816AFF;
                color: #fff;
                width: 3rem;
                height: 3rem;
                line-height: 3rem;
                border-radius: 30%;
                padding-bottom: 0.3rem;

                @media (max-width: 610px){
                    font-size: 1rem;
                    width: 2.8rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                }
            }
        }
    }
    `;