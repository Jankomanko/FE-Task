import styled, {css} from "styled-components";


const primaryButton = css`
  cursor: pointer;
  background-image: linear-gradient(to bottom, #8482FF, #7723FE);
  color: #fff;
  width: 7rem;
  height: 3rem;
  border-radius: 30px;
  border: none;
  box-shadow: none;
  font-size: 0.9rem;
  font-weight: 500;
`;

const secondaryButton = css`
  cursor: pointer;
  color: black;
  width: 7rem;
  height: 1rem;
  border: none;
  background-color: #fff ;
  font-size: 0.9rem;
  font-weight: 500;
  padding-right: 2.2rem;
`;

export const Button = styled.button`
  ${props => props.primary ? primaryButton : secondaryButton}
  
`;