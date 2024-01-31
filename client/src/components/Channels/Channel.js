import React from "react";

function Channel() {
  return (
    <>
      <div className="w-full gap-2 rounded-2xl border border-[#122B6914] bg-[#FFF] p-10 md:gap-3 md:rounded-2xl md:p-12">
        <div className="mb-5 font-bold md:text-xl">
          <p className="text-left text-gray-900">Connect your channels</p>
        </div>
        
          <div className="flex flex-col justify-center gap-3 md:h-[69px] md:flex-row">
            <p className="flex items-center font-bold text-xl w-full cursor-text rounded-xl border border-grey p-4 text-left text-black justify-between">
              <div className="flex items-center">
                <img
                  src="https://logos-world.net/wp-content/uploads/2023/07/Threads-Logo.jpg"
                  alt="Threads Logo"
                  className="hidden md:inline w-14 mr-2"
                />
                Threads
              </div>
              <div>
                <button className="shadow-xs flex items-center justify-center rounded-xl bg-[#1570EF] p-[14px] font-medium text-white md:min-w-[172px] md:px-4 md:py-[14px]">
                  Connect
                </button>
              </div>
            </p>
          </div>
        </div>
     
    </>
  );
}

export default Channel;
