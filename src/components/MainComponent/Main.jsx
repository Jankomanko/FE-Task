import React, { useState, useEffect } from "react";
import CardList from '../CardComponent/CardList';
import data from '/data.json';
import "./Main.scss";

const MainSec = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDestinations(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

 
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "See All" ? null : category);
  };

  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) => destination.category === selectedCategory)
    : destinations;

  return (
    <main className="main-sec">
      <section className="cards">
        <p className="top-destination">TOP DESTINATION</p>
        <section className="main_categories">
          <h2>Explore top destination</h2>
          <ul className="category">
            <li onClick={() => handleCategoryClick("Romantic")}>
              <p className={`nav-item-city ${
            selectedCategory === 'Romantic' ? 'selected' : ''
          }`}
          >Romantic</p>
            </li>
            <li onClick={() => handleCategoryClick("Adventure")}>
              <p className={`nav-item-city ${
            selectedCategory === 'Adventure' ? 'selected' : ''
          }`}>Adventure</p>
            </li>
            <li onClick={() => handleCategoryClick("City Break")}>
              <p className={`nav-item-city ${
            selectedCategory === 'City Break' ? 'selected' : ''
          }`}>City Break</p>
            </li>
            <li onClick={() => handleCategoryClick("Cultural")}>
              <p className={`nav-item-city ${
            selectedCategory === 'Cultural' ? 'selected' : ''
          }`}>Cultural</p>
            </li>
            <li onClick={() => handleCategoryClick("Scenic")}>
              <p className={`nav-item-city ${
            selectedCategory === 'Scenic' ? 'selected' : ''
          }`}>Scenic</p>
            </li>
            <li onClick={() => handleCategoryClick("See All")}>
              <p className={`nav-item-city ${
            selectedCategory === null ? 'selected' : ''
          }`}>See All</p>
            </li>
          </ul>
        </section>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <CardList data={filteredDestinations} />
          </>
        )}
      </section>
    </main>
)};

export default MainSec;

