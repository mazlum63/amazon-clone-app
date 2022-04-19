import Head from "next/head"
import Carousel from "../components/Carousel"
import Products from "../components/Products"
import { getAllItems } from "../lib/productItems"

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Carousel />
      <Products products={products} />
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const products = await getAllItems()
  // Pass data to the page via props
  return { props: { products } }
}
