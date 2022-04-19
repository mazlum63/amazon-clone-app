import React from 'react'
import Link from 'next/link'
import NavbarModal from './NavbarModal'
import NavbarTop from './NavbarTop'
import NavbarBasket from './NavbarBasket'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Navbar() {
    const basketItems = useSelector(state => state.basket.basketItems)
    const [basketStatus, setBasketStatus] = useState(false);
    return (
        <div className="navbar relative">
            <NavbarTop basketStatus={basketStatus} setBasketStatus={setBasketStatus} />
            <div className="navbar__bottom bg-amazon_blue-light flex px-2 py-1 flex-wrap">
                <NavbarModal />
                <ul className='flex text-white text-md flex-wrap'>
                    <li className='flex py-0.5 px-2 rounded-sm hover:outline outline-1'>
                        <Link href='#'>
                            <a>{`Today's Deals`}</a>
                        </Link>
                    </li>
                    <li className='flex py-0.5 px-2 rounded-sm hover:outline outline-1'>
                        <Link href='#'>
                            <a>Customer Service</a>
                        </Link>
                    </li>
                    <li className='flex py-0.5 px-2 rounded-sm hover:outline outline-1'>
                        <Link href='#'>
                            <a>Registry</a>
                        </Link>
                    </li>
                    <li className='flex py-0.5 px-2 rounded-sm hover:outline outline-1'>
                        <Link href='#'>
                            <a>Gift Cards</a>
                        </Link>
                    </li>
                    <li className='flex py-0.5 px-2 rounded-sm hover:outline outline-1'>
                        <Link href='#'>
                            <a>Sell</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <NavbarBasket setBasketStatus={setBasketStatus} basketStatus={basketStatus} />
        </div>
    )
}
