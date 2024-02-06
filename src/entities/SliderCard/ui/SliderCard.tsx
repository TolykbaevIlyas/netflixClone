"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/index.module.scss";
import React from "react";
import Link from "next/link";
import { TSlider } from "../types";


const SliderCard = ({ id, title, image }: TSlider) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/anime/${id}`}
      className={`relative overflow-hidden rounded-2xl `}
    >
      <div
        className={` ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.imgContainer}>
          <Image src={image} alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.textContainer}>
          {title ? <h1 className={`mt-8 `}>{title}</h1> : ""}
          {isHovered && <div className={styles.watchNow}>Watch Now</div>}
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;