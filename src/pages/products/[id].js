import { useRouter } from 'next/router'
import { getAllItems } from '../../lib/productItems'
import { Star } from '../../icons/Icons'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'


export default function Items({ productItems }) {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()
    return <>{
        productItems.map(item => item.id === parseInt(id) && (
            <div className='bg-white product__page p-10'>
                <div className="flex justify-center">
                    <div style={{ height: '500px' }} className="item__image w-full flex justify-center">
                        <img className='h-full' src={item.image} alt={item.title} />
                    </div>
                    <div className="item__details w-full">
                        <h1 className='font-medium text-2xl'>{item.title}</h1>
                        <p className='mt-4'>{item.description}</p>
                        <div className='flex items-center mt-2'>
                            {Array(Math.ceil(item.rating.rate)).fill().map((_, i) => (
                                <Star key={i + 's'} className='text-yellow-400' />
                            ))}
                            <span className='ml-2'>{item.rating.count}</span>
                        </div>
                        <p className='font-bold'>{item.price}€</p>
                        <button onClick={() => dispatch(addToBasket({ image: item.image, price: item.price, title: item.title, description: item.description, id: item.id, rating: item.rating, count: 1 }))} className='bg-gradient-to-b from-yellow-200 to-yellow-400 my-4 py-2 px-4 rounded text-lg font-semibold'>Add to Basket</button>
                    </div>
                </div>
            </div>
        ))
    }</>
}


export async function getStaticProps() {
    const productItems = await getAllItems()
    return {
        props: {
            productItems
        }
    }
}

export async function getStaticPaths() {
    const productItems = await getAllItems();
    const paths = productItems.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    })
    return {
        paths: paths,
        fallback: false // false or 'blocking'
    };
}