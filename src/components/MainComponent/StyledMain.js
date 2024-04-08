import styled, {css} from "styled-components";


export const StyledMain = styled.main`
      .cards {
        padding: 2rem 4rem;
        background: #ffffff;

        @media (max-width: 610px){
            padding: 0.5rem 2rem;
        }

        h1 {
            text-align: center;
        }

        .top-destination {
            color: #F85E9F;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .main_categories{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;

            @media (max-width: 610px){
                flex-wrap: wrap;
                height: 17rem;
            }

            @media (max-width: 430px){
                height: 23rem;
            }

            h2{
                font-weight: 600;
                font-size: 3rem;
                color: #191825;

                @media (max-width: 1080px){
                    font-size: 2rem;
                }
            }

            .category{
                list-style: none;
                display: flex;
                align-items: center;
                width: 40rem;
                justify-content: space-evenly;
                padding-bottom: 3rem;

                @media (max-width: 750px){
                    display: flex;
                    flex-wrap: wrap;
                }

                @media (max-width: 610px){
                    padding: 0.5rem 0;
                    width: 60%;
                    justify-content: space-between;
                }

                li{
                    @include u.breakpoint(small){
                        width: 6rem;
                    }
                }

                p{
                    @include u.breakpoint(medium){
                        font-size: 0.8rem;
                    }

                    @include u.breakpoint(small){
                        font-size: 1rem;
                    }
                }

                .nav-item-city:hover,
                .nav-item-city:active,
                .nav-item-city.selected{
                    transform: scale(1.2);
                    color: #F85E9F;
                    border-bottom: 1px solid #F85E9F;
                    cursor: pointer;
                }

                .nav-item-city{
                    @media (max-width: 750px){
                        display: flex;
                        margin: 0.5rem 1rem;
                    }
                }
            }
        }
        .card-list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
            justify-content: space-between;
            padding-top: 2rem;
            gap: 3rem;

            @media (max-width: 1750px){
                grid-template-columns: 1fr 1fr 1fr;
                justify-content: space-between;
            }

            @media (max-width: 1430px){
                grid-template-columns: 1fr 1fr;
                justify-content: space-between;
            }

            @media (max-width: 1080px){
                grid-template-columns: 1fr 1fr;
                justify-content: space-between;
                gap: 1.2rem;
            }

            @media (max-width: 610px){
                grid-template-columns: 1fr;
                justify-items: center;
            }
            .card{
                margin: 0.6rem 0rem;
            }
        }
    }
    `;