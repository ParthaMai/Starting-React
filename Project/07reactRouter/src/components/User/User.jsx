import React from 'react'
import { useParams } from 'react-router-dom' // Display the user value

function User() {
    const {userid} = useParams() // Extract dynamic data from URL use useParams.
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User