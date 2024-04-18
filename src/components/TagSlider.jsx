// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevSlide, nextSlide } from "./utils/TagSllice";

export const tagFilter = [
  "All",
  "JavaScript",
  "React",
  "Vue.js",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "Funny",
  "Humor",
  "Jokes",
  "Memes",
  "Comedy",
  "Entertainment",
  "Technology",
  "Coding",
  "Programming",
  "Development",
  "Software",
  "Development",
];

const TagSlider = () => {
  const start = useSelector((store) => store.tags.start);
  const dispatch = useDispatch();

  const handleNextSlide = () => {
    dispatch(nextSlide());
  };

  const handlePrevSlide = () => {
    dispatch(prevSlide());
  };

  return (
    <div className="tags">
      <button
        className={`prev-button ${start === 0 ? "hidden" : "hiddenStyle"}`}
        onClick={handlePrevSlide}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {tagFilter.slice(start, start + 11).map((tag, index) => (
        <button
          className={index === 0 && start === 0 ? "active" : ""}
          key={index}
        >
          {tag}
        </button>
      ))}
      <button
        className={`next-button ${
          start + 11 >= tagFilter.length ? "hidden" : "hiddenStyle"
        }`}
        onClick={handleNextSlide}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default TagSlider;
