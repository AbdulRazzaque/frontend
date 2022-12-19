import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
<div class=" bg-white">



    <nav class="flex px-4 border-b md:shadow-lg items-center relative">
      
        <ul class="md:px-2 md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
            {/* <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Login</span>
                </a>
            </li> */}
     
            <li class="relative parent ">
                <Link to="/" href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
                    <span>Login</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </Link>
                <ul class="child transition duration-300 md:absolute top-full left-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
                    <li>
                        <Link href="#" class="flex px-4 py-3 hover:bg-gray-50">
                            Sign in to Admin
                        </Link>
                    </li>
                    <li>
                        <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                           Login to User
                        </a>
                    </li>
                 
                </ul>
            </li>
            {/* <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>About us</span>
                </a>
            </li> */}
        </ul>
        <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>
</div>
    </div>
  )
}

export default Navbar