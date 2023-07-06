import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";

const articles = [
  {
    imgUrl: blog02,
    date: "The Third Age",
    title: "Entrepreneurial Haven: Unleashing Potential in the Modern Shire",
  },
  {
    imgUrl: blog03,
    date: "The Third Age",
    title: "Cafe Convergence: Where Inspired Hobbits Spark Collaborative Magic",
  },
  {
    imgUrl: blog04,
    date: "The Third Age",
    title:
      "Foodie Frenzy: Joyful Hobbits Collaborate and Create Delicious Delights",
  },
  {
    imgUrl: blog05,
    date: "The Third Age",
    title:
      "Sports and Leisure in the Shire: Hobbits Secret to a Well-Rounded Life",
  },
];

const Blog = () => {
  return (
    <div className="company__blog section__padding" id="blog">
      <div className="company__blog-heading">
        <h1 className="gradient__text">
          Check out our hobbit blog "The Shire Chronicles."
        </h1>
      </div>
      <div className="company__blog-container">
        <div className="company__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="The Third Age"
            title="Whispers of the Shire: A Collection of Handwritten Tales and Poems from Hobbit Journals"
          />
        </div>

        <div className="company__blog-container_groupB">
          {articles.map((article) => (
            <Article
              imgUrl={article.imgUrl}
              date={article.date}
              title={article.title}
              key={article.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
