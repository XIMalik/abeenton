import React from 'react'

const Pricing = () => {
    return (
        <div className="flex w-full flex-col border-opacity-50 gap-10">
            <div className="flex flex-col text-center items-center w-full justify-center gap-10 ">
                <div className="stats shadow hidden md:flex">
                    <div className="stat place-items-center">
                        <div className="stat-value">₦90M</div>
                        <div className="stat-desc">5 acres</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-value">₦180M</div>
                        <div className="stat-desc">10 acres</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-value">₦270M</div>
                        <div className="stat-desc">15 acres</div>
                    </div>
                </div>

                <div className="stats shadow md:hidden fles flex-col">
                    <div className="stat">
                        <div className="stat-value">₦90M</div>
                        <div className="stat-desc">5 acres</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">₦180M</div>
                        <div className="stat-desc">5 acres</div>
                    </div>
                </div>
                <div className="stats shadow md:hidden fles flex-col">
                    <div className="stat">
                        <div className="stat-value">₦270M</div>
                        <div className="stat-desc">5 acres</div>
                    </div>
                </div>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut magni, porro amet repudiandae inventore praesentium accusantium quia quo necessitatibus.
            </div> 

            <div className='flex gap-5 items-center w-full justify-center'>
                    <button className="btn btn-primary">Reserve a plot today</button>
                    </div>
        </div>
    )
}

export default Pricing