import Link from 'next/link'

export default function Nav() {
  return (
    <div className="py-6 px-20 bg-slate-700 shadow-lg">
      <nav className="flex gap-10 text-xl">
        <Link href="/MyList" className="nav-links">My List</Link>
        <Link href="/Search" className="nav-links">Search</Link>
        <Link href="/Recommend" className="nav-links">Recommendations</Link>
      </nav>
    </div>
  )
}
