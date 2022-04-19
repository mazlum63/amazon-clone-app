import React, { useState } from 'react'
import { List, PersonCircle, ArrowRight, ArrowLeft, Globe, UnitedStates, Close } from '../icons/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { modalOpen } from '../slices/modalSlice'

const NavbarModal = () => {
    const modalSecondMenu = [
        {
            id: 1,
            name: 'Stream Music',
            links: ['Amazon Music Unlimited', 'Free Streaming Music', 'Podcasts', 'Open Web Player', 'Download the app']

        },
        {
            id: 2,
            name: 'Kindle',
            links: ['Kindle Kids', 'Kindle Paperwhite', 'See all Kindle E-Readers', 'Prime Reading', 'Free Kindle Reading Apps']

        },
        {
            id: 3,
            name: 'Appstore For Android',
            links: ['All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games', 'All Apps and Games ', 'Amazon Coins', 'Download Amazon Appstore', 'Your Apps and Subscriptions', 'Games']

        },
    ]
    const [sendedLinks, setSendedLinks] = useState(null);
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal.modalStatus)
    const [dropDown, setDropDown] = useState(true);
    const dropDownHandle = () => {
        setDropDown(!dropDown)
    }
    return (
        <div className="modal">
            <button onClick={() => dispatch(modalOpen())} className="modal__hamburger flex justify-center items-center text-white hover:outline outline-1 sm:ml-3  py-0.5 px-2 rounded-sm absolute top-4 left-2 m-0 sm:relative sm:top-auto sm:left-auto">
                <List className='w-6 h-6' /><span className='block text-sm font-bold'>All</span>
            </button>
            <div className={`modal__container fixed ${modal === true ? 'modal__open' : ''}`}>
                <div className="modal__menu">
                    <div className="menu__header text-white bg-amazon_blue flex items-center font-bold relative">
                        <PersonCircle className='h-6 w-6 mr-2' /> Hello, {'Mazlum Koyuncu'}
                        <div className='cursor-pointer absolute top-2 right-2 text-xl' onClick={() => dispatch(modalOpen())}><Close /></div>
                    </div>
                    <div style={sendedLinks === null ? { transform: 'translateX(0)' } : { transform: 'translateX(-320px)' }} className="menu__container">
                        <ul className='menu__lists'>
                            <li className="menu__item menu__title">
                                <div>Digital Content & Devices</div>
                            </li>
                            <li onClick={() => setSendedLinks(modalSecondMenu[0])} className="menu__item">
                                <a href='#' className="menu__link">Amazon Music <ArrowRight /></a>
                            </li>
                            <li onClick={() => setSendedLinks(modalSecondMenu[1])} className="menu__item">
                                <a href='#' className="menu__link">Kindle E-readers & E-books <ArrowRight /></a>
                            </li>
                            <li onClick={() => setSendedLinks(modalSecondMenu[2])} className="menu__item">
                                <a href='#' className="menu__link">Amazon Appstore <ArrowRight /></a>
                            </li>
                            <li className="menu__line" />
                            <li className="menu__item menu__title">
                                <div>Shop By Department</div>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Electronics</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Computers</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Smart Home</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Arts & Crafts</a>
                            </li>
                            <ul className={`menu__compress ${dropDown ? 'h-0 overflow-hidden' : ''}`}>
                                <li className="menu__line" />
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Automotive</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Baby</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Beauty and personal care</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Women's Fashion</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Men's Fashion</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Girls' Fashion</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Boys' Fashion</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Health and Household</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Home and Kitchen</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Industrial and Scientific</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Luggage</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Movies & Television</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Pet supplies</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Software</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Sports and Outdoors</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Tools & Home Improvement</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Toys and Games</a>
                                </li>
                                <li className="menu__item">
                                    <a href='#' className="menu__link">Video Games</a>
                                </li>
                            </ul>
                            <li onClick={() => dropDownHandle()} className="menu__item menu__compress__opener flex items-center">
                                <a href='#' className="menu__link">See {dropDown ? 'All' : 'Less'} </a>
                                <ArrowRight className={`ml-2 opacity-50 ${dropDown ? 'rotate-90' : '-rotate-90'}`} />
                            </li>
                            <li className="menu__line" />
                            <li className="menu__item menu__title">
                                <div>Programs & Features</div>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Gift Cards</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Amazon Live</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">International Shopping</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Amazon Second Chance</a>
                            </li>
                            <li className="menu__line" />
                            <li className="menu__item menu__title">
                                <div>Help & Settings</div>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Your Account</a>
                            </li>
                            <li className="menu__item flex items-center">
                                <Globe className='mr-2' />
                                <a href='#' className="menu__link">English</a>
                            </li>
                            <li className="menu__item flex items-center">
                                <UnitedStates className='mr-2' />
                                <a href='#' className="menu__link">United States</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Customer Service</a>
                            </li>
                            <li className="menu__item">
                                <a href='#' className="menu__link">Sign In</a>
                            </li>
                        </ul>
                        {sendedLinks !== null && (
                            <ul className='side__menu'>
                                <li onClick={() => setSendedLinks(null)} className="menu__item menu__title">
                                    <div className='flex items-center'><ArrowLeft className='mr-2' /> Main Menu</div>
                                </li>
                                <li className="menu__line" />
                                <li className="menu__item menu__title">
                                    <div>{sendedLinks?.name}</div>
                                </li>
                                {sendedLinks.links?.map((item, i) => (
                                    <li key={i} className="menu__item">
                                        <a href='#' className="menu__link">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div style={modal ? { zIndex: '49', height: '100vh' } : { zIndex: '-999', height: '0' }} onClick={() => dispatch(modalOpen())} className="modal__bg h-full"></div>
        </div>
    )
}

export default NavbarModal