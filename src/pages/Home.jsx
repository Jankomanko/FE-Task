import React, {useState, useEffect} from "react";
import MainSec from "../components/MainComponent/Main";
import {StyledHome} from "./StyledHome.js";

const Home = () => {
  return (
    <>
      <StyledHome className="hero-container">
        <div className="hero_text"> 
          <p className="serve">WHAT WE SERVE</p>
          <p className="value">Top Values <br /> For You</p>
          <p>Embrace life's vastness, <br />
            venture forth,
          </p>
        </div>
      <div className="div__wrapper_hero">
          <ul className="hero__items">
            <div className="hero__items_choices">
              <img src="src\assets\putovanje.png" alt="putovanje" />
              <h3>Lots of choices</h3>
              <br />
              <p>Embrace life's vastness,<br />venture forth,</p>
              </div>
            <div className="hero__items_paper-plane">
              <img src="src\assets\avion.png" alt="avion" />
              <h3>Best Tour Guide</h3>
              <br />
              <p>Embrace life's vastness,<br />venture forth,
              </p>
              </div>
            <div className="hero__items_credit-card">
              <img src="src\assets\karta.png" alt="kartica" />
               <h3>Easy Booking</h3>
               <br />
               <p>Embrace life's vastness,<br />venture forth,</p>
              </div>
          </ul>
        </div>         
      </StyledHome>
      <MainSec/>
    </>
  );
};

export default Home;
