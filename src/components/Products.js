import React from 'react'
import Product from './Product'

export default function Products({ products }) {
    return (
        <div className='relative -mt-80'>
            <div className='flex flex-wrap justify-center items-center'>
                {products.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ))}
            </div>
            <div className='w-full h-60'>
                <img className='w-full h-full object-cover object-top' src='https://m.media-amazon.com/images/I/71KYCbyaqML._SX3000_.jpg' alt='amazon' />
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                {products.slice(4, 12).map(({ id, title, price, description, category, image, rating }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ))}
            </div>
            <div className='w-full h-60'>
                <img className='w-full h-full object-cover object-top' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt='amazon' />
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                {products.slice(12, products.length).map(({ id, title, price, description, category, image, rating }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ))}
            </div>
        </div>
    )
}