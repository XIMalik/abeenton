import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar hidden md:flex bg-none rounded-full absolute ">
        <div className="flex-1">
          <a className="btn btn-ghost text-sm header_title">Tranquil Plains</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#amenities'>Amenities</a></li>
            <li><a href='#pricing'>Plot Pricing</a></li>
            <li><a href='#location'>Location</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar flex md:hidden bg-none">
        <div className="flex-1">
          <a className="text-xl header_title">Tranquil Plains</a>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1 width-[100px]">
            <li>
              <details className="">
                <summary>Quicklinks</summary>
                <ul className=" w-fit rounded-t-none p-2">
                  <li><a href='#amenities'>Amenities</a></li>
                  <li><a href='#pricing'>Plot Pricing</a></li>
                  <li><a href='#location'>Location</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar