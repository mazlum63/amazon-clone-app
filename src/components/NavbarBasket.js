import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { emptyBasket, deleteItem, increaseDecreaseItem } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'
import { Close, Plus, Dash } from '../icons/Icons'

const NavbarBasket = ({ basketStatus, setBasketStatus }) => {
    const basketItems = useSelector(state => state.basket.basketItems)
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const itemsTotal = 0
        basketItems.map(item => {
            itemsTotal += item.price * item.count
        })
        setTotal(itemsTotal);
    }, [basketItems])
    const dispatch = useDispatch()
    const emptyBasketAndTotal = () => {
        setTotal(0);
        dispatch(emptyBasket())
    }
    return (
        <>
            {(basketItems.length > 0 && basketStatus === true) && (
                <div className='navbar__basketItems bg-white fixed top-0 right-0 w-32 h-full z-40 overflow-y-scroll scrollbar-none shadow-left'>
                    <div className='sticky top-0 bg-white pb-2 shadow-2xl'>
                        <div className='absolute top-2 left-2 cursor-pointer text-red-500' onClick={() => setBasketStatus()}><Close /></div>
                        <div className='px-2 py-4 text-sm font-medium text-center text-red-500'>
                            <span className='font-normal text-black'>Subtotal: </span><br />{total.toFixed(2)} €
                        </div>
                        <Link href='/checkout'>
                            <a className='text-xs py-2 mx-1 block text-center bg-yellow-400 rounded-lg'>
                                Proceed to Checkout
                            </a>
                        </Link>
                    </div>
                    {basketItems.map((item, i) => (
                        <div key={i} className="basket__item my-2 py-2 flex flex-col border-b-2 justify-center items-center">
                            <img className='w-full object-contain p-4' src={item.image} alt={item.title} />
                            <p className='font-medium'>{item.price}€</p>

                            <div className='flex items-center'>
                                <div className='pointer bg-green-500 text-white' onClick={() => dispatch(increaseDecreaseItem({ id: item.id, num: -1 }))}><Dash /></div>
                                <p className='mx-1'>{item.count}</p>
                                <div className='pointer bg-green-500 text-white' onClick={() => dispatch(increaseDecreaseItem({ id: item.id, num: 1 }))}><Plus /></div>

                            </div>
                            <button onClick={() => dispatch(deleteItem(item.id))} className='bg-red-500 text-white rounded-lg font-medium text-sm p-2 m-2'>Remove</button>
                        </div>
                    ))}
                    <div onClick={() => emptyBasketAndTotal()} className='text-xs py-2 mx-1 block text-center bg-yellow-400 rounded-lg'>
                        Empty the Basket
                    </div>
                </div>
            )}
        </>
    )
}

export default NavbarBasket