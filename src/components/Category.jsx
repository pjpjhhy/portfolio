import React from 'react';
import { GiSkills } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full flex flex-col items-center justify-center gap-y-10 pr-5'>
        {/* home */}
        <Link to="/"><div className='w-20 h-20 flex items-center justify-center rounded-full  bg-black relative hover-container'>
          {/* 호버시에 나타날 검정색 원 */}
          <div
          style={{clipPath: 'polygon(100% 0%, 95% 50%, 100% 100%, 7% 100%, 0% 50%, 7% 0)'}}
          className='absolute orange-square flex justify-center items-center gap-x-3 font-bold'><IoHome size={30} />home</div>
          <p className='text-white font-bold hover:text-[#4ADE80]'>HOME</p>
        </div></Link>
        {/* skills */}
        <Link to="/skills"><div className='w-20 h-20 flex items-center justify-center rounded-full bg-black relative hover-container'>
          {/* 호버시에 나타날 검정색 원 */}
          <div
          style={{clipPath: 'polygon(100% 0%, 95% 50%, 100% 100%, 7% 100%, 0% 50%, 7% 0)'}}
          className='absolute orange-square flex justify-center items-center gap-x-3 font-bold'><GiSkills size={30} />skills</div>
          <p className='text-white font-bold hover:text-[#4ADE80]'>SKILL</p>
        </div></Link>
        {/* project */}
        <Link to= "/project"><div className='w-20 h-20 flex items-center justify-center rounded-full bg-black relative hover-container'>
          {/* 호버시에 나타날 검정색 원 */}
          <div
          style={{clipPath: 'polygon(100% 0%, 95% 50%, 100% 100%, 7% 100%, 0% 50%, 7% 0)'}}
          className='absolute orange-square flex justify-center items-center gap-x-3 font-bold'><PiProjectorScreenChartFill size={30} />project</div>
          <p className='text-white font-bold hover:text-[#4ADE80]'>PROJECT</p>
        </div></Link>
        {/* github */}
        <div className='w-20 h-20 flex items-center justify-center rounded-full bg-black relative hover-container'>
          {/* 호버시에 나타날 검정색 원 */}
          <div
          style={{clipPath: 'polygon(100% 0%, 95% 50%, 100% 100%, 7% 100%, 0% 50%, 7% 0)'}}
          className='absolute orange-square flex justify-center items-center gap-x-3 font-bold'><BsGithub size={30} />github</div>
          <p className='text-white font-bold hover:text-[#4ADE80]'>GitHub</p>
        </div>
      </div>
    </div>
  );
}
