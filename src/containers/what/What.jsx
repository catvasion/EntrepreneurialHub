import React from "react";
import Feature from "../../components/feature/Feature";
import "./what.css";

const mainFeature = {
  title: "Who is Gandalf",
  text: "Gandalf is one of the Istari, a group of immortal wizards sent to Middle-earth to aid its inhabitants and foster their entrepreneurial spirit. With his vast knowledge and wisdom, Gandalf guides and empowers the Free Peoples of Middle-earth to pursue their dreams and build prosperous societies. He uses his magical abilities not only to combat the forces of darkness but also to ignite the spark of creativity and innovation among all races. Gandalf symbolises the power of imagination, resilience, and the pursuit of greatness.",
};

const features = [
  {
    title: "Shadowfax",
    text: "Shadowfax, the Lord of all horses, embodies the spirit of speed, agility, and determination. As Gandalf's loyal companion, Shadowfax represents the swift progress and breakthrough innovations that entrepreneurs strive for.",
  },
  {
    title: "Olórin",
    text: "Gandalf was named Olórin by the ancients of Middle-earth, recognising his inherent qualities of wisdom, guidance, and inspiration. Through his mentorship and teachings, Gandalf empowers entrepreneurs to unlock their full potential and make a lasting impact on their communities.",
  },
  {
    title: "The staff",
    text: "Gandalf's staff is not just a walking stick but a symbol of his ability to wield magic and channel his entrepreneurial energy. It represents the power of resourcefulness and adaptability in the face of challenges, enabling entrepreneurs to overcome obstacles and achieve their goals.",
  },
];

const What = () => {
  return (
    <div className="company__what section__margin" id="what">
      <div className="company__what-feature">
        <Feature title={mainFeature.title} text={mainFeature.text} />
      </div>
      <div className="company__what-heading">
        <h1 className="gradient__text">Gandalf the Catalyst of Prosperity</h1>
        <p>A Legendary Wizard Inspiring Entrepreneurial Success</p>
      </div>
      <div className="company__what-container">
        {features.map((feature, index) => (
          <Feature key={index} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  );
};

export default What;
