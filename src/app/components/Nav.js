import Link from 'next/link'

export default function Nav() {
  return (
    <div className='nav'>
      <nav>
        <Link href="/MyList" className="nav-links">My List</Link>
        <Link href="/Search" className="nav-links">Search</Link>
        <Link href="/Recommend" className="nav-links">Recommendations</Link>
      </nav>
    </div>
  )
}
