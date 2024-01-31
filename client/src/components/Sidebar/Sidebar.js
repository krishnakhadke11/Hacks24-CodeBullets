import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Sidebar() {
    const { pathname } = useLocation();

    const isActive = (path) => {
        return pathname === path;
    };
    return (
        <nav className="scroll-bar-show ml-8 flex flex-none flex-col overflow-y-auto px-2 py-6 hidden sm:flex">
            <ul className="space-y-3">
                <NavLink
                    to="/create-new-post"
                    className={`block select-none rounded-md p-[10px] text-sm text-gray-700 hover:bg-gray-50 bg-gray-100 font-medium ${isActive('/create-new-post') ? 'active' : ''
                        }`}
                >
                    <li className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5">
                                <svg
                                    width="22"
                                    height="21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 20v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C8.76 11 9.04 11 9.6 11h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C14 11.76 14 12.04 14 12.6V20M1 8.5l9.04-6.78c.344-.258.516-.387.705-.437a1 1 0 0 1 .51 0c.189.05.36.179.705.437L21 8.5M3 7v9.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 20 5.08 20 6.2 20h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 18.48 19 17.92 19 16.8V7l-6.08-4.56c-.688-.516-1.033-.775-1.41-.874a2 2 0 0 0-1.02 0c-.377.1-.721.358-1.41.874L3 7Z"
                                        stroke="#344054"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <span>Create</span>
                            </div>
                        </div>
                    </li>
                </NavLink>
                <NavLink
                    to="/drafts"
                    className={`block select-none rounded-md p-[10px] text-sm text-gray-700 hover:bg-gray-50 ${isActive('/drafts') ? 'active' : ''
                        }`}
                >
                    <li className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.333 6.666V10M8.542 4.583H5.667c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093c-.272.535-.272 1.235-.272 2.635v1c0 .777 0 1.165.127 1.471.169.409.493.733.902.902.306.127.694.127 1.47.127v3.542c0 .193 0 .29.009.371a1.667 1.667 0 0 0 1.495 1.496c.082.008.178.008.372.008.193 0 .29 0 .371-.008a1.667 1.667 0 0 0 1.496-1.496c.008-.081.008-.178.008-.371v-3.542h.625c1.472 0 3.273.79 4.662 1.546.81.442 1.215.663 1.48.63a.789.789 0 0 0 .577-.342c.156-.217.156-.652.156-1.523V4.272c0-.87 0-1.306-.156-1.523a.789.789 0 0 0-.576-.343c-.266-.032-.67.189-1.481.63-1.39.758-3.19 1.547-4.662 1.547Z"
                                        stroke="#344054"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <span>Draft Idea</span>
                            </div>
                        </div>
                    </li>
                </NavLink>
                <NavLink
                    to="/dashboard/my-achievements"
                    className={`block select-none rounded-md p-[10px] text-sm text-gray-700 hover:bg-gray-50 ${isActive('/dashboard/my-achievements') ? 'active' : ''
                        }`}
                >
                    <li className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5">
                                <svg
                                    width="18"
                                    height="20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m4.944 9.324-3.17-5.673c-.365-.653-.547-.979-.517-1.246a.833.833 0 0 1 .341-.58c.218-.158.592-.158 1.34-.158H4.8c.277 0 .416 0 .54.04.111.036.213.094.3.17.097.088.167.207.308.447L8.998 7.5l3.05-5.176c.14-.24.211-.36.31-.446a.833.833 0 0 1 .297-.17c.125-.041.264-.041.542-.041h1.862c.747 0 1.121 0 1.34.157.19.137.313.348.34.581.03.267-.152.593-.516 1.246l-3.17 5.673m-5.305 2.343 1.25-.833V15m-1.042 0h2.084m2.788-5.913a5.417 5.417 0 1 1-7.66 7.66 5.417 5.417 0 0 1 7.66-7.66Z"
                                        stroke="#344054"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <span>New Channels</span>
                            </div>
                        </div>
                    </li>
                </NavLink>

            </ul>
        </nav>
    )
}

export default Sidebar