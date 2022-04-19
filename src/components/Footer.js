import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, UnitedStates } from '../icons/Icons'

export default function Footer() {
    const [footerTop, setFooterTop] = useState([
        {
            "title": "Get to Know Us",
            "links": [
                "Get to Know Us",
                "Careers",
                "Blog",
                "About Amazon",
                "Investor Relations",
                "Amazon Devices",
                "Amazon Science"
            ]
        },
        {
            "title": "Make Money with Us",
            "links": [
                "Sell products on Amazon",
                "Sell on Amazon Business",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
                "See More Make Money with Us"
            ]
        },
        {
            "title": "Amazon Payment Products",
            "links": [
                "Amazon Business Card",
                "Shop with Points",
                "Reload Your Balance",
                "Amazon Currency Converter"
            ]
        },
        {
            "title": "Let Us Help You",
            "links": [
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Amazon Assistant",
                "Help"
            ]
        }
    ])
    const [footerBottom, setFooterBottom] = useState([
        {
            "title": "Amazon Music",
            "description": "Stream millions of songs"
        },
        {
            "title": "Amazon Advertising",
            "description": "Find, attract, and engage customers"
        },
        {
            "title": "Amazon Drive",
            "description": "Cloud storage from Amazon"
        },
        {
            "title": "6pm",
            "description": "Score deals on fashion brands"
        },
        {
            "title": "AbeBooks",
            "description": "Books, art & collectibles"
        },
        {
            "title": "ACX",
            "description": "Audiobook Publishing Made Easy"
        },
        {
            "title": "Alexa",
            "description": "Actionable Analytics for the Web"
        },
        {
            "title": "Sell on Amazon",
            "description": "Start a Selling Account"
        },
        {
            "title": "Amazon Business",
            "description": "Everything For Your Business"
        },
        {
            "title": "AmazonGlobal",
            "description": "Ship Orders Internationally"
        },
        {
            "title": "Home Services",
            "description": "Experienced Pros Happiness Guarantee"
        },
        {
            "title": "Amazon Ignite",
            "description": "Sell your original Digital Educational Resources"
        },
        {
            "title": "Amazon Web Services",
            "description": "Scalable Cloud Computing Services"
        },
        {
            "title": "Audible",
            "description": "Listen to Books & Original Audio Performances"
        },
        {
            "title": "Book Depository",
            "description": "Books With Free Delivery Worldwide"
        },
        {
            "title": "Box Office Mojo",
            "description": "Find Movie Box Office Data"
        },
        {
            "title": "ComiXology",
            "description": "Thousands of Digital Comics"
        },
        {
            "title": "DPReview",
            "description": "Digital Photography"
        },
        {
            "title": "Fabric",
            "description": "Sewing, Quilting & Knitting"
        },
        {
            "title": "Goodreads",
            "description": "Book reviews & recommendations"
        },
        {
            "title": "IMDb",
            "description": "Movies, TV & Celebrities"
        },
        {
            "title": "IMDbPro",
            "description": "Get Info Entertainment Professionals Need"
        },
        {
            "title": "Kindle Direct Publishing",
            "description": "Indie Digital & Print Publishing Made Easy"
        },
        {
            "title": "Prime Video Direct",
            "description": "Video Distribution Made Easy"
        },
        {
            "title": "Shopbop",
            "description": "Designer Fashion Brands"
        },
        {
            "title": "Woot!",
            "description": "Deals and Shenanigans"
        },
        {
            "title": "Zappos",
            "description": "Shoes & Clothing"
        },
        {
            "title": "Ring",
            "description": "Smart Home Security Systems"
        },
        {
            "title": "eero WiFi",
            "description": "Stream 4K Video in Every Room"
        },
        {
            "title": "Blink",
            "description": "Smart Security for Every Home"
        },
        {
            "title": "Neighbors App",
            "description": "Real-Time Crime & Safety Alerts"
        },
        {
            "title": "Amazon Subscription Boxes",
            "description": "Top subscription boxes – right to your door"
        },
        {
            "title": "PillPack",
            "description": "Pharmacy Simplified"
        }
    ])
    return (
        <div className='footer text-white'>
            <div className="footer__top flex flex-wrap md:flex-nowrap md:justify-center bg-amazon_blue-light py-10 px-4">
                {footerTop.map((item, i) => (
                    <div key={i + 'ft'} className='m-4 lg:mx-10'>
                        <h1 className='font-bold'>{item.title}</h1>
                        <ul>
                            {item.links.map((link, l) => (
                                <li key={l + 'l'} className='text-xs md:text-sm my-1'><a className='cursor-pointer hover:underline'>{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='bg-amazon_blue-light border-t border-current px-4 py-10 flex flex-wrap justify-center items-center'>
                <Link href='/'>
                    <a className='p-2 flex item-center'><Image
                        src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                        alt="amazon logo"
                        width={66}
                        height={20}
                        objectFit='contain'
                        className='cursor-pointer'
                    /></a>
                </Link>
                <div className='flex items-center ml-4 md:ml-20 border px-2 py-1 rounded mb-2 md:mb-0'><Globe className='mr-2' />English</div>
                <div className='ml-4 border px-2 py-1 rounded mb-2 md:mb-0'>$ USD - U.S. Dollar</div>
                <div className='flex items-center ml-4 border px-2 py-1 rounded mb-2 md:mb-0'><UnitedStates className='mr-2' /> United States</div>
            </div>
            <div className="footer__bottom bg-amazon_blue py-10">
                <ul style={{ maxWidth: '1000px', margin: '0 auto' }} className='flex flex-wrap justify-center'>
                    {footerBottom.map((item2, i) => (
                        <li key={i + 'fb'} style={{ width: '125px' }} className='m-4'><a className='cursor-pointer hover:underline text-xs leading-3 block'>
                            {item2.title}<br />
                            <span className='opacity-50'>{item2.description}</span>
                        </a></li>
                    ))}
                </ul>
                <div className='pt-10'>
                    <ul className='flex flex-wrap justify-center'>
                        <li className='text-xs mx-2'><a className='cursor-pointer hover:underline'>Conditions of Use</a></li>
                        <li className='text-xs mx-2'><a className='cursor-pointer hover:underline'>Privacy Notice</a></li>
                        <li className='text-xs mx-2'><a className='cursor-pointer hover:underline'>Interest-Based Ads</a></li>
                        <li className='text-xs mx-2'>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}