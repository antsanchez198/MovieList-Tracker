import Link from 'next/link'

export default function Nav() {
  return (
    <div className="bg-slate-700 shadow-lg">
    <div className="py-5 px-8 "> 
      <nav className="flex gap-10 text-lg">
        <Link href="/MyList" className="nav-links">My List</Link>
        <Link href="/Search" className="nav-links">Search</Link>
        <Link href="/Recommend" className="nav-links">Recommendations</Link>
      </nav>
    </div>
    </div>
    )
}
