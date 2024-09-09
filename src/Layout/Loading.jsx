import React from 'react'
import loadingimg from "./loading-3692.gif"
const Loading = () => {
  return (
    <div className='flex h-lvh bg-black justify-center items-center'>
        <img src={loadingimg}alt="loading" />
    </div>
  )
}

export default Loading