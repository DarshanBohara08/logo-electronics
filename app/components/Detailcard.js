import React from 'react';
import './card.css'

const DetailCard = ({ thumbnails }) => {
  return (
    <div id='detail-card' className="flex justify-center gap-20 bg-[#380D41]">
      {thumbnails.map((thumbnail, index) => (
        <div key={index} className="w-[300px] h-[391px] rounded-lg bg-white gradient-border">
          <img src={thumbnail} alt="" className="w-[250px] h-[250px] mt-[50px] ml-[25px]" />
        </div>
      ))}
    </div>
  );
};

export default DetailCard;
