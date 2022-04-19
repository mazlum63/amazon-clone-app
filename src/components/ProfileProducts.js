import React from 'react'
import { Star } from '../icons/Icons'

const ProfileProducts = ({ products }) => {
    return (
        <div className='profile__products bg-white mt-10'>
            <h1 className='text-3xl font-semibold px-10 pt-10'>Products</h1>
            <div className='products__container flex overflow-x-scroll mt-10'>
                {products.map(product => (
                    <div key={product.id} className='bg-white mx-2 p-4'>
                        <div className='h-40 w-40'>
                            <img className='object-contain h-full w-full' src={product.image} alt={product.title} />
                        </div>
                        <p className='my-4'>{product.title}</p>
                        <div className='flex items-center'>
                            {Array(Math.ceil(product.rating.rate)).fill().map((_, i) => (
                                <Star key={i + 'sss'} className='text-yellow-400' />
                            ))}
                            <span className='ml-2'>{product.rating.count}</span>
                        </div>
                        <p className='font-bold'>{product.price}€</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileProducts