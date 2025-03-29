import React from 'react'

interface ProductDetailsProps {
    id: number
    name: string
    price: number
    description: string
}
const Products = async() => {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store'})  // Disable caching for this request
    const products: ProductDetailsProps[] = await res.json()
  return (
    <div>
        <h1>Product Details</h1>
        <div className='Card grid grid-cols-3 gap-4'>
        {products.map(product=>
            <div key ={product.id} className='card w-96 bg-base-100 shadow-xl'>
                <h2 className='text-xl font-bold'>{product.name}</h2>
                <p className='text-lg'>Price: ${product.price}</p>
                <p>{product.description}</p>
            </div>
        )}
    </div>
    </div>
  )
}

export default Products
