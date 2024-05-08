import React from 'react';
import Category from '../components/Category';
import { FaHtml5, FaCss3Alt, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";


export default function Skills() {
  return (
    <div className='w-full flex flex-col justify-center bg-gray-950'>
        <div className='w-full pt-12 flex justify-center text-white font-black text-[50px]'>
            <div className='text-[87px] absolute text-green-400 z-20'>skills</div>
            <div className='text-[80px] text-white opacity-10'>skills</div>
        </div>
      <div className='w-full h-fit py-14 flex justify-center'>
        <div className='w-full max-w-[90%] flex justify-center items-center h-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='green-border w-[300px] h-[300px] bg-black flex flex-col p-3'>
                <div className='flex items-center text-white'><FaHtml5 color='#4ADE80' size={60}/>: HTML5</div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                </div>
            </div>
            <div className='green-border w-[300px] h-[300px] bg-black flex flex-col p-3'>
                <div className='flex items-center text-white'><FaCss3Alt color='#4ADE80' size={60}/>: CSS3</div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                </div>
            </div>
            <div className='green-border w-[300px] h-[300px] bg-black flex flex-col p-3'>
                <div className='flex items-center text-white gap-x-1'><IoLogoJavascript color='#4ADE80' size={60}/>: Java Script</div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                </div>
            </div>
            <div className='green-border w-[300px] h-[300px] bg-black flex flex-col p-3'>
                <div className='flex items-center text-white gap-x-1'><FaReact color='#4ADE80' size={60}/>: React</div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                </div>
            </div>
            <div className='green-border w-[300px] h-[300px] bg-black flex flex-col p-3'>
                <div className='flex items-center text-white gap-x-1'><SiTailwindcss color='#4ADE80' size={60}/>: Tailwind</div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                </div>
            </div>
            <div className='green-border w-[300px] h-[300px] bg-black flex flex-col p-3'>
                <div className='flex items-center text-white gap-x-1'><FaGitSquare color='#4ADE80' size={60}/>: github</div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                </div>
            </div>
          </div>
          <div className='ml-[250px]'><Category/></div>
        </div>
      </div>
    </div>
  );
}
