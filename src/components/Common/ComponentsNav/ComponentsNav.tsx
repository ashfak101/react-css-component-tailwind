import Link from 'next/link'
import React from 'react'

const ComponentsNav = () => {
  return (
    <div className='container'>
      <ul className='flex justify-center gap-3 py-2'>
        <li>
          <Link
            href='/react-components/buttons'
            className='text-gray-500 text-md '>
            Buttons
          </Link>
        </li>
        <li>
          <Link
            href='/react-components/icons'
            className='text-gray-500 text-md '>
            Icon
          </Link>
        </li>
        <li>
          <Link href='/react-components/typography'>Typography</Link>
        </li>
      </ul>
    </div>
  )
}

export default ComponentsNav
