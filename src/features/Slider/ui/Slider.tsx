"use client";

import {SliderCard} from "@/entities/SliderCard";
import React, { useState } from "react";

import { TSlider } from "@/entities/SliderCard/types";

interface ISlider {
  slides: TSlider[];
}

const Slider = ({ slides }: ISlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex text-center text-4xl text-white relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-300  gap-16 px-16"
        style={{
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((data) => (
          <SliderCard
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 px-4 rounded-full hover:bg-gray-200 hover:bg-opacity-30"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 px-4 rounded-full hover:bg-gray-200 hover:bg-opacity-30"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;