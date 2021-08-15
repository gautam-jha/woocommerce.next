import React from 'react';
import Image from 'next/image';

interface ProductProps {
    productName: string;
    location: string;
    price: string;
    src?: string;
    srcSet?: string[];
}

const Product = ({
    productName,
    price,
    location,
    src,
    srcSet,
}: ProductProps): React.ReactElement => {
    return (
        <div className="product-grid">
            <a href="#" className="block h-64 rounded-lg shadow-lg bg-white overflow-hidden">
                {(src || srcSet) && (
                    <Image
                        alt="product"
                        className="w-full"
                        src={src + '&' + Math.random()}
                        layout="responsive"
                        height="300"
                        width="300"
                    />
                )}
            </a>
            <div className="flex items-center justify-between mt-3">
                <div>
                    <a href="#" className="font-medium">
                        {productName}
                    </a>
                    <a className="flex items-center" href="#">
                        <span className="text-xs font-medium text-gray-600">at</span>
                        <span className="text-xs font-medium ml-1 text-indigo-500">{location}</span>
                    </a>
                </div>
                <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
                    {price}
                </span>
            </div>
        </div>
    );
};

export default Product;
