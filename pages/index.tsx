import type { NextPage } from 'next';
import Image from 'next/image';
import Product from '../src/components/Product';
import Main from '../src/layouts/Main';

const Home: NextPage = () => {
    const products = [
        {
            productName: 'Product Dummy 1',
            price: '$ 150',
            location: 'Delhi',
            src: 'http://source.unsplash.com/250x250/?random',
        },
        {
            productName: 'Product Dummy 2',
            price: '$ 50',
            location: 'Delhi',
            src: 'http://source.unsplash.com/250x250/?random',
        },
        {
            productName: 'Product Dummy 3',
            price: '$ 180',
            location: 'Delhi',
            src: 'http://source.unsplash.com/250x250/?random',
        },
        {
            productName: 'Product Dummy 4',
            price: '$ 180',
            location: 'Delhi',
            src: 'http://source.unsplash.com/250x250/?random',
        },
        {
            productName: 'Product Dummy 5',
            price: '$ 180',
            location: 'Delhi',
            src: 'http://source.unsplash.com/250x250/?random',
        },
    ];

    return (
        <Main>
            <div className="container mx-auto bg-gray-100">
                <h2 className="font-bold text-3xl text-center mb-10"> Collections</h2>
                <div className="section   mb-14">
                    <div className="flex flex-row justify-center">
                        <div className="category-container m-1 mr-2 w-48 h-48">
                            <div className="w-48 h-48 rounded-full bg-gray-500 text-xl text-white">
                                <Image
                                    alt="image"
                                    src="http://source.unsplash.com/250x250/?shirt"
                                    className="rounded-full"
                                    layout="responsive"
                                    height="300"
                                    width="300"
                                />
                            </div>
                            <h3 className="text-center font-semibold mt-2 capitalize">shirt</h3>
                        </div>
                        <div className="category-container m-1 mr-2 w-48 h-48">
                            <div className="w-48 h-48 rounded-full bg-gray-500 text-xl text-white">
                                <Image
                                    alt="image"
                                    src="http://source.unsplash.com/250x250/?t-shirt"
                                    className="rounded-full"
                                    layout="responsive"
                                    height="300"
                                    width="300"
                                />
                            </div>
                            <h3 className="text-center font-semibold mt-2 capitalize">t-shirt</h3>
                        </div>
                        <div className="category-container m-1 mr-2 w-48 h-48">
                            <div className="w-48 h-48 rounded-full bg-gray-500 text-xl text-white">
                                <Image
                                    alt="image"
                                    src="http://source.unsplash.com/250x250/?music"
                                    className="rounded-full"
                                    layout="responsive"
                                    height="300"
                                    width="300"
                                />
                            </div>
                            <h3 className="text-center font-semibold mt-2 capitalize">Music</h3>
                        </div>
                        <div className="category-container m-1 mr-2 w-48 h-48">
                            <div className="w-48 h-48 rounded-full bg-gray-500 text-xl text-white">
                                <Image
                                    alt="image"
                                    src="http://source.unsplash.com/250x250/?hoodies"
                                    className="rounded-full"
                                    layout="responsive"
                                    height="300"
                                    width="300"
                                />
                            </div>
                            <h3 className="text-center font-semibold mt-2 capitalize">hoodies</h3>
                        </div>
                        <div className="category-container m-1 mr-2 w-48 h-48">
                            <div className="w-48 h-48 rounded-full bg-gray-500 text-xl text-white">
                                <Image
                                    alt="image"
                                    src="http://source.unsplash.com/250x250/?misc"
                                    className="rounded-full"
                                    layout="responsive"
                                    height="300"
                                    width="300"
                                />
                            </div>
                            <h3 className="text-center font-semibold mt-2 capitalize">Other</h3>
                        </div>
                    </div>
                </div>
                <div className="section   mt-14">
                    <h2 className="font-bold text-3xl text-center mt-14 mb-10">
                        Product by Category
                    </h2>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
                        {products.map((pr) => (
                            <Product key={pr.productName} {...pr} />
                        ))}
                    </div>
                </div>
                <div className="section   mt-14">
                    <h2 className="font-bold text-3xl text-center mt-14 mb-10">
                        Product by Category
                    </h2>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
                        {products.map((pr) => (
                            <Product key={pr.productName} {...pr} />
                        ))}
                    </div>
                </div>
                <div className="section   mt-14">
                    <h2 className="font-bold text-3xl text-center mt-14 mb-10">
                        Product by Category
                    </h2>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
                        {products.map((pr) => (
                            <Product key={pr.productName} {...pr} />
                        ))}
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Home;
