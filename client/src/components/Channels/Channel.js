import React from 'react';

function Channel() {
    return (
        <>
            <div class="w-full gap-2 rounded-2xl border border-[#122B6914] bg-[#FFF] p-4 md:gap-3 md:rounded-2xl md:p-12">
                <div class="mb-5 font-bold md:text-xl">
                    <p class="text-left text-gray-900">Connect your channels</p>
                </div>
                <div class="flex flex-col justify-center gap-3 md:h-[69px] md:flex-row">
                    <p class="flex items-center w-full cursor-text rounded-xl border border-grey p-4 text-left text-[11px] text-black md:text-sm">
                        <img src='https://logos-world.net/wp-content/uploads/2023/07/Threads-Logo.jpg' alt="Threads Logo" class="hidden md:inline w-14 mr-2" />
                        <span class="font-bold text-xl">Threads</span>

                    </p>
                    <button class="shadow-xs flex w-12 w-full items-center justify-center rounded-xl bg-[#1570EF] p-[14px] font-medium text-white md:w-auto md:min-w-[172px] md:px-4 md:py-[14px]">
                        <p class="">Connect</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Channel;
