import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving the life of hobbits',
    text: 'Bringing mirth and camaraderie to the Shire through pipe-smoking and ale-drinking.'
  },
  {
    title: 'Enriching the lives of elves',
    text: 'Radiating everlasting joy in Rivendell, where time holds no boundaries.'
  },
  {
    title: 'Elevating the lives of dwarfs',
    text: 'Unearthing treasures of mithril as dwarfs delve deep into the tunnels.'
  },
  {
    title: 'Spreading happiness among all',
    text: 'Fostering contentment in Gondor through the reign of King Aragorn.'
  },
];

const Features = () => {
  return (
    <div className='company__features section__padding' id='features'>
      <div className='company__features-heading'>
        <h1 className='gradient__text'>Empowering Middle-earth's Free Peoples</h1>
        <p>Bringing Prosperity and Joy to All</p>
      </div>
      <div className='company__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
