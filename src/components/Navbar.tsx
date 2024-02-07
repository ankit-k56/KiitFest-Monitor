import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-screen bg-green-400">
      <div className="max-w-[400px] text-lg mx-auto p-3 flex justify-between ">
        <Link href="/user">Find User</Link>
        <Link href="/counts">Get Counts</Link>
        <Link href="/sendmail">Send Mail</Link>
      </div>
      {/* <Link href='/'>Find User</Link> */}
    </nav>
  )
}

export default Navbar
