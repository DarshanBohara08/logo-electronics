import React from 'react';
;
import Image from 'next/image'
import Productitem from '@/app/components/Productitem';


const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$99',
            imageSrc: 'image/product.png',
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$99',
            imageSrc: 'image/product.png',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$99',
            imageSrc: 'image/product.png',
        },
        {
            id: 4,
            name: 'Product 4',
            price: '$99',
            imageSrc: 'image/product.png',
        },
        {
            id: 5,
            name: 'Product 5',
            price: '$99',
            imageSrc: 'image/product.png',
        },
        {
            id: 6,
            name: 'Product 6',
            price: '$99',
            imageSrc: 'image/product.png',
        },
    ];

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="grid grid-cols-3 gap-20">
                {products.map((product) => (
                    <Productitem
                        key={product.id}
                        name={product.name}
                        imageSrc={product.imageSrc}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default Product;