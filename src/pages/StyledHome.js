import styled, {css} from "styled-components";

export const StyledHome = styled.section`
    height: 18rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;

    .hero_text{
        width: 40%;
        display: flex;
        flex-direction: column;

        @media (max-width: 899px){
            width: 80%;
        }

        p{
            padding: 0.5rem;
        }

        .serve {
            color: #F85E9F;
            font-weight: 600;
            font-size: 1.1rem;
        }

        .value {
            font-size: 3rem;
            font-weight: bold;
            font-weight: 700;
            color: #252B42;
            line-height: 1.2;
        }
    }

    .div__wrapper_hero{
        width: 90rem;
        display: flex;

        @media (max-width: 899px){
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            margin-top: 3rem;
            padding: 0;
        }

        @media (max-width: 610px){
            margin-top: 1.5rem;
        }

        .hero__items{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;

            @media (max-width: 899px){
                justify-content: space-between;
            }

            @media (max-width: 610px){
                flex-direction: column;
                align-items: flex-start;
            }

            h3{
                font-size: 1.6rem;

                @media (max-width: 899px){
                    font-size: 1.3rem;
                }
            }

            img{
                width: 6.5rem;
                height: 4.5rem;

                @media (max-width: 899px){
                    margin-bottom: 0.5rem;
                    width: 3.6rem;
                    height: 2.7rem;
                }

                @media (max-width: 610px){
                    margin: 1rem 0;
                }

            }
        }
    }

    @media (max-width: 1080px){
        display: flex;
        justify-content: space-evenly;
        height: 23rem;
    }

    @media (max-width: 899px){
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: 35%;
    }

    @media (max-width: 610px){
        padding: 0 2rem;
    }
    `;