import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './Components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
<h1 className="text-3xl font-bold underline p-16"> Cart Application </h1>

  <div className="grid grid-cols-3 gap-4 border border-slate-400">
  <Link href="/Products" className="card w-96 bg-base-100">Show Products </Link>
  <Link href="/UserDetails" className="card w-96 bg-base-100">Show Users </Link>
</div>
    </main>
  )
}
