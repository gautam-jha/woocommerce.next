import type { GetStaticPropsResult } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Product from '../src/components/Product';
import Main from '../src/layouts/Main';
import client from '../src/utils/ApolloClient';
import GET_CATEGORIES_QUERY from '../src/woo/queries/categories';

interface ImageProps {
    sourceUrl: string;
    altText: string;
}
interface CatProp {
    id: string;
    name: string;
    slug: string;
    image: ImageProps;
}
interface IndexProps {
    productCategories: CatProp[];
}

const Home: React.FC<IndexProps> = ({ productCategories }) => {
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
                        {productCategories &&
                            productCategories?.map((cat) => (
                                <div key={cat.id} className="category-container m-1 mr-2 w-48 h-48">
                                    <Link href={`/collection/${cat.slug}`} passHref={true}>
                                        <a>
                                            <div className="w-48 h-48 rounded-full bg-white text-xl text-white">
                                                <Image
                                                    alt="image"
                                                    src={
                                                        cat?.image?.sourceUrl ??
                                                        'http://source.unsplash.com/250x250/?' +
                                                            cat.name
                                                    }
                                                    className="rounded-full"
                                                    layout="responsive"
                                                    height="300"
                                                    width="300"
                                                />
                                            </div>
                                            <h3 className="text-center font-semibold mt-2 capitalize">
                                                {cat.name}
                                            </h3>
                                        </a>
                                    </Link>
                                </div>
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

export const getStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
    const { data } = await client.query({
        query: GET_CATEGORIES_QUERY,
    });

    return {
        props: {
            productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
        },
        revalidate: 1,
    };
};
