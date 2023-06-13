import React from 'react';
import './possibility.css';
import tree from '../../assets/gondor-tree.png';

const Possibility = () => {
  return (
    <div className='company__possibility section__padding' id='possibility'>
      <div className='company__possibility-image'>
        <img src={tree} alt='Tree of Gondor' />
      </div> 
      <div className='company__possibility-content'>
        <h4>Experience the Wonders of Gondor</h4>
        <h1 className='gradient__text'>Unforgettable Journeys Await</h1>
        <p>Immerse yourself in the rich history and breathtaking beauty of Gondor. As the leading provider of exceptional travel experiences in Middle-earth, we offer a wide range of tours and accommodations tailored to your preferences. From exploring the grandeur of Minas Tirith to embarking on thrilling adventures in the White Mountains, Gondor is your gateway to unforgettable journeys. Join us in creating lasting memories.</p>
        <h4>Book Your Adventure</h4>
      </div>
    </div>
  );
};

export default Possibility;
