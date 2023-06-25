"use client";
import React, { useState } from "react";
import Card from "./Card";
import "./card.css";
import Image from "next/image";

const CardItem = () => {
  const handleLeftArrowClick = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const cardToMove = updatedCards.pop();
      updatedCards.unshift(cardToMove);
      return updatedCards;
    });
  };

  const handleRightArrowClick = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const cardToMove = updatedCards.shift();
      updatedCards.push(cardToMove);
      return updatedCards;
    });
  };

  const [cards, setCards] = useState([
    {
      pname: "Apple",
      imageSrc: "/assets/image/apple.png",
      description: "MacBook Pro 15-inch",
      price: "£350.00",
      size: "w-[263px] h-[145px] mb-[8.6px] mt-[31px] rounded-lg",
    },
    {
      pname: "Keyboard",
      imageSrc: "/assets/image/keyboard.png",
      description: "AZERTY Keyboard",
      price: "£100.00",
      size: "w-[215px] h-[119px] mb-[41px] mt-[31px] rounded-lg",
    },
    {
      pname: "Desktop",
      imageSrc: "/assets/image/monitor.png",
      description: "AZERTY Desktop",
      price: "£250.00",
      size: "w-[180px] h-[163px] mb-[6px] mt-[22px] rounded-lg",
    },
    {
      pname: "Headphone",
      imageSrc: "/assets/image/headphone.png",
      description: "Wireless Headphone",
      price: "£50.00",
      size: "w-[141px] h-[166px] mt-[19px] mb-[7px] rounded-lg",
    },
  ]);

  return (
    <div
      id="card"
      className="w-full p-20 bg-[#380D41] gradient-border overflow-hidden"
    >
      <Image
        src="/assets/image/arrow.png"
        loading="lazy"
        className=" cursor-pointer"
        width={46.97}
        height={46.97}
        onClick={handleLeftArrowClick}
      />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="flex space-x-[112px] mt-[245px]">
          {cards.map((card, index) => (
            <Card
              key={index}
              pname={card.pname}
              imageSrc={card.imageSrc}
              description={card.description}
              price={card.price}
              size={card.size}
            />
          ))}
        </div>
      </div>

      <Image
        src="/assets/image/Vector.png"
        className="absolute right-0 mr-[117px] cursor-pointer"
        width={46.97}
        height={46.97}
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

export default CardItem;
