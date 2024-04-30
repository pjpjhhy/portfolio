import React from 'react'
import Category from '../components/Category'

export default function Project() {
  return (
   <div className='w-full h-full flex flex-col justify-center bg-gray-800'>
      <div className='w-full pt-12 flex justify-center text-white font-black text-[50px]'>
            <div className='text-[86px] absolute text-green-400 z-20'>project</div>
            <div className='text-[80px] text-white opacity-50'>project</div>
        </div>
        <div className='w-full h-fit py-14 flex justify-center'>
        <div className='w-full max-w-[90%] flex justify-center items-center h-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='green-border w-[350px] h-[350px] bg-black flex flex-col p-1'>
                <div className='flex items-center text-white'></div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='w-full h-[150px] bg-green-100 bg-center'>
                        <img className='' src="" alt="" />
                    </div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='font-bold text-[16px]'>Tech stack</div>
                        <div className='flex gap-x-2 text-[13px]'>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>HTML5</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>CSS3</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='green-border w-[350px] h-[350px] bg-black flex flex-col p-1'>
                <div className='flex items-center text-white'></div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='w-full h-[150px] bg-green-100'>a</div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='font-bold text-[16px]'>Tech stack</div>
                        <div className='flex gap-x-2 text-[13px]'>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>HTML5</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>CSS3</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='green-border w-[350px] h-[350px] bg-black flex flex-col p-1'>
                <div className='flex items-center text-white'></div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='w-full h-[150px] bg-green-100'></div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='font-bold text-[16px]'>Tech stack</div>
                        <div className='flex gap-x-2 text-[13px]'>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>HTML5</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>CSS3</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='green-border w-[350px] h-[350px] bg-black flex flex-col p-1'>
                <div className='flex items-center text-white'></div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='w-full h-[150px] bg-green-100'>a</div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='font-bold text-[16px]'>Tech stack</div>
                        <div className='flex gap-x-2 text-[13px]'>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>HTML5</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>CSS3</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='green-border w-[350px] h-[350px] bg-black flex flex-col p-1'>
                <div className='flex items-center text-white'></div>
                <div className='flex flex-col text-white p-3 gap-y-3'>
                    <div className='w-full h-[150px] bg-green-100'>a</div>
                    <div className='flex gap-x-1'><p className='text-[#4ADE80] font-black'>-</p><p>원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.</p></div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='font-bold text-[16px]'>Tech stack</div>
                        <div className='flex gap-x-2 text-[13px]'>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>HTML5</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>CSS3</div>
                            <div className=' border border-[#4ADE80] p-[2px] rounded-lg'>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='ml-[250px]'><Category/></div>
        </div>
      </div>
   </div>
  )
}
