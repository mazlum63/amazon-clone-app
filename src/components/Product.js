import React from 'react'
import Image from 'next/image'
import { Star } from '../icons/Icons'
import { addToBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export default function Product({ id, title, price, description, category, image, rating }) {
    const dispatch = useDispatch();
    const stars = Math.ceil(rating.rate);
    const limitTitle = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }
    const limitDescription = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }
    return (
        <div className='product bg-white flex items-center flex-col w-80 m-5 p-4'>
            <Link href={`/products/${id}`}>
                <a>
                    <div className='flex flex-col items-center'>
                        <h1 className='product__category w-full text-right'>{category}</h1>
                        <div className='my-4 hover:scale-110 transition-all'><Image
                            src={image}
                            alt={title}
                            width={200}
                            height={200}
                            objectFit='contain'
                        /></div>
                        <h2 className='product__title mb-4'>{limitTitle(title, 20)}</h2>
                        <div className="product__starts flex items-center w-full">
                            {
                                Array(stars).fill().map((_, i) => (
                                    <Star key={i} className='text-yellow-400' />
                                ))
                            }
                            <span className='ml-2'>{rating.count}</span>
                        </div>
                        <p>{limitDescription(description, 50)}</p>
                        <p className='font-bold text-lg mt-4'>{price} €</p>
                    </div>
                </a>
            </Link>
            <button onClick={() => dispatch(addToBasket({ image, price, title, description, id, rating, count: 1 }))} className='bg-gradient-to-b from-yellow-200 to-yellow-400 w-full my-4 py-2 rounded text-lg font-semibold'>Add to Basket</button>
        </div>
    )
}
