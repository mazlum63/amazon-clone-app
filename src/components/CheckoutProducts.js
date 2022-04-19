import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emptyBasket, deleteItem, increaseDecreaseItem } from '../slices/basketSlice'
import { Star, Plus, Dash } from '../icons/Icons'

const CheckoutProducts = ({ setTotal }) => {

    const basketItems = useSelector(state => state.basket.basketItems)
    const dispatch = useDispatch()
    const emptyBasketAndTotal = () => {
        setTotal(0);
        dispatch(emptyBasket())
    }
    return (
        <div className='w-full grow bg-white mb-4 p-6'>
            <h1 className='text-3xl'>Shopping Cart</h1>
            {basketItems.length > 0 && (
                <div className="selected__items mt-10 border-b-2 pb-4">
                    {
                        basketItems.map(item => (
                            <div key={item.id + 'asf'} className="selected__item flex flex-col sm:flex-row items-center sm:items-start pt-6 mt-4 border-t-2">
                                <img className='w-32 mb-4' src={item.image} alt={item.title} />
                                <div className='grow mx-4'>
                                    <p>{item.description}</p>
                                    <div className='flex mt-4 items-center'>
                                        {
                                            Array(Math.ceil(item.rating.rate)).fill().map((_, i) => (
                                                <Star key={i} className='text-yellow-400' />
                                            ))
                                        }
                                        <span className='ml-2'>{item.rating.count}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='pointer bg-green-500 text-white' onClick={() => dispatch(increaseDecreaseItem({ id: item.id, num: -1 }))}><Dash /></div>
                                        <p className='mx-1'>{item.count}</p>
                                        <div className='pointer bg-green-500 text-white' onClick={() => dispatch(increaseDecreaseItem({ id: item.id, num: 1 }))}><Plus /></div>
                                    </div>
                                    <button className='bg-red-500 text-white px-4 py-1 rounded-lg mt-2' onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
                                </div>
                                <div className='w-full lg:w-32'><p className='font-bold text-lg text-right'>{item.price}€</p></div>
                            </div>
                        ))
                    }
                </div>
            )}
            <div className='flex justify-end py-4'>
                {basketItems.length > 0 && (<button onClick={() => emptyBasketAndTotal()} className='py-2 px-6 rounded-lg bg-red-500 text-white'>Remove All Items</button>)}
            </div>
        </div>
    )
}

export default CheckoutProducts