import React from 'react';
import "./card.css"
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const DetailCard = () => {
    return (
        <div id='detail-card' className="flex justify-center gap-14 ">
            <div className="w-[300px] h-[391px] rounded-lg bg-white border-gold">
                <img src="image/headphone.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white ml-4 border-gold">
                <img src="image/headphone.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white ml-4 border-gold">
                <img src="image/headphone.png" alt="" className="w-full h-full" />
            </div>
            <div className="w-[300px] h-[391px] rounded-lg bg-white ml-4 border-gold">
                <img src="image/headphone.png" alt="" className="w-full h-full" />
            </div>

        </div>
    );
};

export default DetailCard;