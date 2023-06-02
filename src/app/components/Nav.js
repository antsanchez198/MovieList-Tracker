import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <nav>
        <Link href="/MyList">My List</Link>
        <Link href="/Search">Search</Link>
        <Link href="/Recommend">Recommendations</Link>
      </nav>
    </div>
  )
}
