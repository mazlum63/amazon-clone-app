import React, { useState } from 'react'

const ProfileAccount = () => {
    const [profileLinks, setProfileLinks] = useState([
        {
            id: 1 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png',
            title: 'Your Orders',
            decription: 'Track, return, or buy things again'
        },
        {
            id: 2 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png',
            title: 'Login & Security',
            decription: 'Edit login, name, and mobile number'
        },
        {
            id: 3 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/Prime_clear-bg._CB423472251_.png',
            title: 'Prime',
            decription: 'View benefits and payment settings'
        },
        {
            id: 4 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png',
            title: 'Gift Carts',
            decription: 'View balance, redeem, or reload cards'
        },
        {
            id: 5 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png',
            title: 'Your Payments',
            decription: 'Manage payment methods and settings, view all transactions'
        },
        {
            id: 6 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png',
            title: 'Your Profiles',
            decription: 'Manage, add, or remove user profiles for personalized experiences'
        },
        {
            id: 7 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png',
            title: 'Digital Services and Device Support',
            decription: 'Troubleshoot device issues'
        },
        {
            id: 8 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg',
            title: 'Your Messages',
            decription: 'View messages to and from Amazon, sellers, and buyers'
        },
        {
            id: 9 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png',
            title: 'Archived Orders',
            decription: 'View and manage your archived orders'
        },
        {
            id: 10 + 'link',
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png',
            title: 'Your Lists',
            decription: 'View, modify, and share your lists, or create new ones'
        }
    ])
    return (
        <div className="profile__account bg-white flex justify-center pb-10">
            <div style={{ maxWidth: '1000px' }} className='p-2 md:p-0'>
                <h1 className='text-3xl font-semibold py-6'>Your Account</h1>
                <div className="account__links flex flex-wrap justify-start">
                    {
                        profileLinks.map(link => (
                            <div key={link.id} className="account__link flex items-center rounded border-2 w-full md:w-80 h-28 p-2 m-1.5">
                                <img src={link.image} alt={link.title} className="link__image w-14 h-14 object-contain" />
                                <div className="link__text ml-2">
                                    <h2 className="link__title font-medium">{link.title}</h2>
                                    <p className="link__description text-sm opacity-80">{link.decription}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileAccount