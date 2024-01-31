import React from 'react'
import Card from '../Card/Card'
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function Home() {
  const { pathname } = useLocation();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar/>

        <div className="flex-1 px-4 pt-4 lg:px-7 lg:pt-7 undefined flex-col bg-gray-100">
          <div className="space-y-12 pb-40 xl:space-y-[52px]">
            <div className="xl:border-b-[0.5px] xl:border-dashboard-gray-200">
              <div className="xl:space-y-1.5 space-y-2">
                <h1 className="text-dashboard-gray-900 xl:text-3xl text-2xl xl:leading-[38px] font-medium">
                  Content
                </h1>
                <br />
                <div className='flex space-x-2'>
                  <Card posts="Post1" />
                  <Card posts="Post2" />
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Home