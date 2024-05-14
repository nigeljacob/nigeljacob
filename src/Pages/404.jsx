/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import erroeImage from '../assets/404.gif'

const Error = () => {

    useEffect(() => {
    document.title = "404 - Page Not Found"
    }, [])

  return (
    <div className="bg-[#000000] w-screen h-screen flex items-center justify-center flex-col">
      <img src={erroeImage} alt="error" className='max-w-[200px]'/>
      <p className="text-center mt-[20px]">
        Oops!! The link you clicked may be broken or the page <br /> may have
        been removed. Sorry 😕{" "}
      </p>
      <button className="px-[10px] py-[5px] border-2 border-[#3bffde] text-[#3bffde] mt-[10px] rounded-[5px]" onClick={event => {
        window.location.href = "/"
      }}>
        👈🏻 Take me Back
      </button>
    </div>
  );
}

export default Error
