import React from 'react'
import { Star } from '../icons/Icons'
import CheckoutProducts from '../components/CheckoutProducts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllItems } from '../lib/productItems'

const checkout = ({ products }) => {
    const basketItems = useSelector(state => state.basket.basketItems)
    useEffect(() => {
        const itemsTotal = 0
        basketItems.map(item => {
            itemsTotal += item.price * item.count
        })
        setTotal(itemsTotal);
        setItemCount(basketItems.length)
    }, [basketItems])
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0)
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col lg:flex-row mt-10'>
            <CheckoutProducts setTotal={setTotal} />
            <div className='w-full lg:w-1/4 lg:ml-4 mb-4 pb-8'>
                <div className="subtotal bg-white p-4">
                    <h1 className='text-lg'>Subtotal ({itemCount} item): <span className='font-bold'>€{total.toFixed(2)}</span></h1>
                    <button className='bg-yellow-400 w-full mt-6 py-2 rounded text-sm font-medium'>Proceed to checkout</button>
                </div>
                <div className='bg-white mt-4 p-4 rounded-lg'>
                    <h1 className='text-sm font-semibold'>Some Products</h1>
                    <div>
                        {
                            [...Array(4)].map((x, i) => (
                                <div key={i} className="basket__item my-2 py-2 flex border-b-2 items-center">
                                    <img className='w-20 object-contain p-2' src={products[i].image} alt={products[i].title} />
                                    <div>
                                        <p className='text-sm font-medium'>{products[i].title}</p>
                                        <div className='flex'>
                                            {
                                                Array(Math.ceil(products[i].rating.rate)).fill().map((_, i) => (
                                                    <Star key={i} className='text-yellow-400' />
                                                ))
                                            }
                                        </div>
                                        <p className='font-medium'>{products[i].price}€</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkout


export async function getStaticProps() {
    // Fetch data from external API
    const products = await getAllItems()
    // Pass data to the page via props
    return { props: { products } }
}
