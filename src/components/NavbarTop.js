import React from 'react'
import { Geo, Search, Shop } from '../icons/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const NavbarTop = ({ basketStatus, setBasketStatus }) => {
    const basketCount = useSelector(state => state.basket.basketItems.length)
    const user = useSelector(state => state.signin.user)
    return (
        <div className='navbar__top flex flex-col lg:flex-row bg-amazon_blue text-white py-2 px-2'>
            <div className="flex grow justify-center flex-col sm:flex-row">
                <div className="nav__left flex content-start ml-14 sm:ml-0">
                    <Link href='/'>
                        <a className='block hover:outline outline-1 rounded-sm p-2 flex item-center'><Image
                            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                            alt="amazon logo"
                            width={100}
                            height={30}
                            objectFit='contain'
                            className='cursor-pointer'
                        /></a>
                    </Link>
                    <div className="deliver__to flex justify-center items-center hover:outline outline-1 p-2 rounded-sm">
                        <Geo className='w-5 h-5' />
                        <div className="country text-center ml-2">
                            <span className='text-xs block'>Deliver to</span>
                            <span className='text-md block'>Germany</span>
                        </div>
                    </div>
                </div>
                <div className="navbar__center mx-6 grow">
                    <form className='flex justify-center items-center text-black h-full content-center'>
                        <input className='grow focus:outline-none px-4 rounded-l h-10' type="text" name="navbarSearch" id="navbarSearch" />
                        <button type='button' className='bg-orange-300 px-3 rounded-r h-10'><Search /></button>
                    </form>
                </div>
            </div>
            <div className="navbar__right ml-auto flex">
                <Link href={'/account'}>
                    <a>
                        <div className="navbar__signin hover:outline outline-1 p-2 rounded-sm flex flex-col">
                            <span className='signin__user text-xs'>Hello, {user ? user.email : 'Sign in'}</span>
                            <span className="signin__account text-sm font-bold">Account & Lists</span>
                        </div>
                    </a>
                </Link>
                <div className="navbar__orders hover:outline outline-1 p-2 rounded-sm flex flex-col">
                    <span className="orders__return text-xs">Returns</span>
                    <span className='text-sm font-bold'>& Orders</span>
                </div>
                <div onClick={() => setBasketStatus(!basketStatus)} className="navbar__carts hover:outline outline-1 p-2 rounded-sm flex items-end">
                    <div className="carts__icon relative">
                        <Shop />
                        <span className='carts__count font-bold text-yellow-500'>{basketCount}</span></div>
                    <span className='carts__text font-bold text-sm'>Carts</span>
                </div>
            </div>
        </div >
    )
}

export default NavbarTop