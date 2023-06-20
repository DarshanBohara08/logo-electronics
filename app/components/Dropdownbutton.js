'use state '
import React, { useState } from 'react';
import './card.css';


const Dropdownbutton = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div >
            <select id='dropdown'
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-white gradient-text py-2 px-4 rounded-full cursor-pointer w-[316px] h-[88px] text-[32px] items-center font-semibold appearance-none "
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 8l4 4 4-4H6z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
                    backgroundSize: '24px',
                    backgroundPosition: 'right 10px center',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '40px', 
                }}
            >
                <option className="gradient-text" value="" data-text="All Products">All Products</option>
                <option value="Headphone">Headphone</option>
                <option value="Mouse">Mouse</option>
                <option value="keyboard">Keyboard</option>
            </select>
        </div>
    );
};

export default Dropdownbutton;