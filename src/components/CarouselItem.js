import React from 'react'

export default function CarouselItem({ image, order, title, description }) {
    return (
        <div style={{ left: `${order}00%` }} className="carousel__item">
            <img src={`${image}`} className="carousel__image" alt='image' />
            <div className="carousel__text">
                {title && (<h1 className="carousel__title">{title}</h1>)}
                {description && (<p className="carousel__description">{description}</p>)}
            </div>
        </div>
    )
}
