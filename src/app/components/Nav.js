import Link from 'next/link'

export default function Nav() {
  return (
    <div className="py-4 px-10 bg-slate-700 shadow-lg">
      <nav className="flex gap-8 text-xl">
        <Link href="/MyList" className="nav-links">My List</Link>
        <Link href="/Search" className="nav-links">Search</Link>
        <Link href="/Recommend" className="nav-links">Recommendations</Link>
      </nav>
    </div>
  )
}
