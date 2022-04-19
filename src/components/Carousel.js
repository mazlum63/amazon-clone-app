import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nextBtn, prevBtn, carouselTransHandle } from '../slices/carouselSlice'
import CarouselItem from './CarouselItem';
import { ArrowLeft, ArrowRight } from '../icons/Icons';

const Carousel = () => {
    const dispatch = useDispatch()
    const carousel = useSelector(state => state.carousel)
    return (
        <div>
            <div className="carousel">
                <div onClick={() => dispatch(prevBtn())}
                    className="carousel__arrow carousel__prev hover:outline outline-3 outline-blue-400 rounded-md opacity-50 hover:opacity-100">
                    <ArrowLeft className='h-10 w-10' />
                </div>
                <div
                    onTransitionEnd={() => dispatch(carouselTransHandle())}
                    style={{ transform: carousel.carouselTransform, transition: carousel.carouselTransition }}
                    className="carousel__container">
                    <CarouselItem
                        order={-1}
                        image='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
                    />
                    <CarouselItem
                        order={0}
                        image='https://m.media-amazon.com/images/I/71KYCbyaqML._SX3000_.jpg'
                    />
                    <CarouselItem
                        order={1}
                        image='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
                    />
                    <CarouselItem
                        order={2}
                        image='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
                    />
                    <CarouselItem
                        order={3}
                        image='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'
                    />
                    <CarouselItem
                        order={4}
                        image='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
                    />
                    <CarouselItem
                        order={5}
                        image='https://m.media-amazon.com/images/I/71KYCbyaqML._SX3000_.jpg'
                    />
                </div>
                <div onClick={() => dispatch(nextBtn())}
                    className="carousel__arrow carousel__next hover:outline outline-3 outline-blue-400 rounded-md opacity-50 hover:opacity-100">
                    <ArrowRight className='h-10 w-10' />
                </div>
                <div className="carousel__bottom" />
            </div>
        </div>
    )
}

export default Carousel