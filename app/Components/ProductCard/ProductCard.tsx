import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <div>
    <Link href="/Products" className="card w-96 bg-base-100 shadow-xl">Show Products </Link>
    </div>
  )
}

export default ProductCard
