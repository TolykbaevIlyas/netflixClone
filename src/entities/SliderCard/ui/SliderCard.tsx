"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../assets/index.module.scss";
import React from "react";
import Link from "next/link";
import { TSlider } from "../types";
import { Button } from "@/shared/ui/Button";


const SliderCard = ({ id, title, image,description }: TSlider) => {
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
          {isHovered && <div className={`${styles.watchNow} gap-5`}>
            <h3>{title}</h3>
            <p className="text-base">{description}</p>
            <Button>More</Button>
            </div>}
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;