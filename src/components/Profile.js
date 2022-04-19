import React from 'react'
import ProfileAccount from './ProfileAccount'
import ProfileProducts from './ProfileProducts'

const Profile = ({ products }) => {
    return (
        <div>
            <ProfileAccount />
            <ProfileProducts products={products} />
        </div>
    )
}

export default Profile