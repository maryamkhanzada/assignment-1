import React from 'react'

export default function Home() {
  return (
    
     
    
      <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
        <div className="bg-[#A855F7] col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Header</div>
        <div className="bg-[#34D399] row-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Sidebar</div>
        <div className="bg-[#60A5FA] col-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Content-1</div>
        <div className="bg-[#60A5FA]  text-[36px] font-bold text-center content-center border-2 border-white">Content-2</div>
        <div className="bg-[#60A5FA]  text-[36px] font-bold text-center content-center border-2 border-white">Content-3</div>
        <div className="bg-[#A855F7] col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Footer</div>
      </div>
          
      
  );
}
