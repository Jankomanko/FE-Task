import styled, {css} from "styled-components";

export const StyledHeader = styled.header`
    background: #fff;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem 4rem 1rem 4rem;
    height: 7rem;

    @media (max-width: 1080px){
        position: sticky;
        top: 0;
        z-index: 4;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
        height:5.5rem ;
    }

    @media (max-width: 610px){
        padding: 1rem 2rem;
    }

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navbar-logo {
            font-weight: 700;
            background-clip: text;
            color: transparent;
            background-image: linear-gradient(to right, #5D50C6, #F85E9F);
            cursor: pointer;
            text-decoration: none;
            font-size: 2.4rem;
        }

        .menu-icon {
            display: none;
            color: black;

            @media (max-width: 1080px){
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(-100%, 60%);
                font-size: 1.8rem;
                cursor: pointer;
            }
        }

        .nav-menu {
            display: flex;
            list-style: none;
            text-align: center;
            width: 60vw;
            justify-content:end;
            margin-right: 2rem;
            padding-left: 5rem;

            @media (max-width: 1080px){
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 100%;
                height: 100vh;
                position: absolute;
                top: 80px;
                left: -100%;
                opacity: 1;
                transition: all 0.5s ease;
            }

            &.active{
                @media (max-width: 1080px){
                    background: #ffffff;
                    left: 0;
                    opacity: 1;
                    transition: all 0.5s ease;
                    z-index: 1;
                }
            }

            .nav-links {
                color: black;
                font-weight: 500;
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: 0.5rem 1rem;
                height: 100%;

                @media (max-width: 1080px){
                    text-align: center;
                    padding: 2rem 0 2rem;
                    width: 100%;
                }
            }

            .nav-links:hover {
                transform: scale(1.2);
                font-weight: 500;

                @media (max-width: 1080px){
                    background-color: #ffffff;
                    color: black;
                    border-radius: 0;
                }
            }

            .fa-bars {
                color: #fff;
            }

            .nav-links-mobile {
                display: none;

                @media (max-width: 1080px){
                    display: block;
                    text-align: center;
                    margin: 2rem auto;
                    border-radius: 4px;
                    width: 40%;
                    text-decoration: none;
                    font-size: 1.5rem;
                    background-color: transparent;
                    color: #fff;
                    padding: 14px 20px;
                    border: 1px solid #fff;
                    transition: all 0.3s ease-out;
                }

                &:hover{
                    @media (max-width: 1080px){
                        background: #ca5151;
                        color: #242424;
                        transition: 250ms;
                    }
                }
            }
        }
    }
    `;