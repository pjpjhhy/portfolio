import React, { useState, useEffect } from 'react';
import Category from './Category';

export default function Main() {
  const [nameIndex, setNameIndex] = useState(0);
  const [jobIndex, setJobIndex] = useState(0);
  const names = ['JUN HYUN PARK', ''];
  const jobs = ['', 'FrontEnd&Publisher'];

  useEffect(() => {
    const nameTimer = setInterval(() => {
      setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2500); 

    const jobTimer = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 2500); 

    return () => {
      clearInterval(nameTimer);
      clearInterval(jobTimer);
    };
  }, []);

  return (
    <div className='w-full flex justify-center bg-gray-950'>
      <div className='w-full h-screen md:max-w-[85%] flex gap-x-10'>
        <div className='w-full flex flex-col md:flex-row gap-y-10'>
          {/* my img */}
          <div className='relative w-[35%] h-full flex items-center justify-center pl-5'>
            <div className=' absolute w-[81%] h-[80%] bg-green-400 left-6 bottom-[6%]'></div>
            <div className=' absolute w-[82%] h-[82%] bg-purple-300 flex justify-center items-center'>
              <p>img</p>
            </div>
          </div>
          {/* my info */}
          <div className='w-[55%] h-full flex items-center justify-center pl-12 pt-3'>
            <div
              style={{
                clipPath:
                  'polygon(6% 0, 70% 0%, 100% 0, 100% 90%, 94% 100%, 0 100%, 0% 70%, 0 10%)',
              }}
              className='w-full h-fit flex flex-col gap-y-5 bg-blue-200 p-7'
            >
              <div className='flex flex-col gap-y-1'>
                <div className='font-bold text-[45px]'>HI! HOW ARE YOU?</div>
                <div className='flex gap-x-1 animation-element text-[22px] pl-1'>
                  <div className='font-black '>I'M</div>
                  <div className='name-job'>
                    <div className={`font-black ${nameIndex === 0 ? 'active' : 'hidden'}`}>{names[nameIndex]}</div>
                  </div>
                  <div className='name-job'>
                    <div className={`font-black ${jobIndex === 1 ? 'active' : 'hidden'}`}>{jobs[jobIndex]}</div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center gap-y-4 mt-2'>
                <div className='font-bold text-[30px]'>personal info</div>
                <div className='grid grid-cols-2 gap-1 font-bold'>
                    <div className='flex gap-x-1'>Name: <p className=''>박준현</p></div>
                    <div className='flex gap-x-1'>Age: <p>97.04.05, 27</p></div>
                    <div className='flex gap-x-1'>Phone: <p>010-9984-5296</p></div>
                    <div className='flex gap-x-1'>Address: <p>대구 광역시 달서구</p></div>
                    <div className='flex gap-x-1'>Email: <p>jun970405@naver.com</p></div>
                </div>
              </div>
              <div className='w-fit h-fit bg-green-400 rounded-xl shadow-lg mt-7 mb-3'>
                <button className='p-2 px-3 font-black'>More About Me</button>
              </div>
            </div>
          </div>
        </div>
        {/* category */}
        <div className='w-[18%] flex justify-center items-center'>
          <Category />
        </div>
      </div>
    </div>
  );
}
