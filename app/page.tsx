import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './Components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1 className="text-3xl font-bold underline">
  Hello world!
  <Link href="/UserDetails" className="card w-96 bg-base-100 shadow-xl">Show Users </Link>
<ProductCard />
</h1>
    </main>
  )
}
