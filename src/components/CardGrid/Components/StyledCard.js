

import styled, {css} from "styled-components"



  export const StyledCard = styled.div` 
    border-radius: 10px;
    overflow: hidden;
    width: 25rem;
    height: 40rem;

    @media (max-width: 1430px){
      width: 30rem;  }

    @media (max-width: 1080px){width: 22rem;
      height: 37rem;}

    @media (max-width: 899px){width: 20rem;
      height: 35rem;}

    @media (max-width: 750px){width: 16rem;
      height: 36rem;}

    @media (max-width: 610px){width: 25rem;
      height: 36rem;}

    @media (max-width: 430px){width: 20rem;
      height: 35rem;}
    

   h2 {
   font-weight: 700;
   color: $dark-text;
   margin: 0.8rem 0;
  }

   .card-image-container{
    position: relative;

    i {
     color: #FFCD6B;
     font-size: 0.7rem;
     padding-right: 1rem;
    }
   }

   img{
    width: 100%;
    height: auto;
    border-radius: 35px;
   }

   .card-rating {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0.8rem;
    right: 1.5rem;
    background-color: rgba(12, 17, 31, 0.24);
    padding: 0.3rem 0.7rem;
    border-radius: 30px;
    color: #fff;
    backdrop-filter: blur(5px)
   }

   .card-details {
    padding: 1.1rem 1.5rem;
    background-color: rgba(247, 247, 247, 0.5);
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 35px 35px;
    height: 6.5rem;

     .price {
       font-weight: 700;
       font-size: 1.4rem;
       color: $dark-text;
     }

  `;


