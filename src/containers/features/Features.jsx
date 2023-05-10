import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Improving the life of all hobbits',
    text: 'In the shire the hobbits smoke the pipe and drink ale.'
  },
  {
    title: 'Improving the life of all elves',
    text: 'In the rivendell the elves smile because they live for a long long time.'
  },
  {
    title: 'Improving the life of all dwarfs',
    text: 'In the tunnels the dwarfs dig deep and mine for mithril.',
  },
  {
    title: 'Improving the life of all people',
    text: 'In Gondor they are happy because Aragorn is their king.'
  },
]

 const Features = () => {
  return (
    <div className='what__features section__padding' id='features'>
      <div className='company__features-heading'>
        <h1 className='gradient__text'>He wore a tall pointed blue hat, a long grey cloak, and a silver scarf.</h1>
        <p>Request an email from Gandalf.</p>      
      </div> 
      <div className='company__features-container'>
        {featuresData.map((item, index) => 
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        )}
      </div>
    </div>
  )
}
export default Features
