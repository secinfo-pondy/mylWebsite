import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
      <img className="" src="/images/site/logo.svg" alt="MYLOGIQ" />
    </Link>
  )
}
