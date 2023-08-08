import React from 'react'
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {SiGmail} from 'react-icons/si'

function Footer() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Contact Us
      </h1>

      <div className="flex flex-cols  gap-6 py-6 justify-center">
        <div className="rounded-lg p-4 flex justify-between items-center hover:scale-105 hover:bg-orange-600 hover:text-white duration-300 ">
          <h2 className="font-bold sm:text-xl">
            {" "}
            <AiOutlineTwitter size={35} />
          </h2>
        </div>
        <div className="rounded-lg p-4 flex justify-between items-center hover:scale-105 hover:bg-orange-600 hover:text-white duration-300">
          <h2 className="font-bold sm:text-xl">
            <AiFillLinkedin size={30} />
          </h2>
        </div>
        <div className="rounded-lg p-4 flex justify-between items-center hover:scale-105 hover:bg-orange-600 hover:text-white duration-300">
          <h2 className="font-bold sm:text-xl">
            <AiFillGithub size={30} />
          </h2>
        </div>
        <div className="rounded-lg p-4 flex justify-between items-center hover:scale-105 hover:bg-orange-600 hover:text-white duration-300">
          <h2 className="font-bold sm:text-xl">
            <SiGmail size={30} />
          </h2>
        </div>
      </div>
      <div className="flex flex-cols  gap-6 py-6 justify-center">
        <h1 className='font-bold'>Copyright © 2023 All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default Footer