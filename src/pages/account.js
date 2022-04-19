import React from 'react'
import { useSelector } from 'react-redux'
import Signin from '../components/Signin'
import Profile from '../components/Profile'
import { getAllItems } from '../lib/productItems'

const signin = ({ products }) => {
    const userInfo = useSelector(state => state.signin.user)
    return (
        <div>
            {!userInfo ? (<Signin />) : (<Profile products={products} />)}
        </div>
    )
}

export default signin

export async function getServerSideProps() {
    const products = await getAllItems()
    return {
        props: {
            products
        }
    }
}