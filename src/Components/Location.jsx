import React from 'react'

const Location = () => {
    return (
        <div id='location'>
            <div
                className="hero min-h-[50vh]"
                >
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl subtitle flex items-start justify-center gap-1"><img width="25" height="25" src="https://img.icons8.com/fluency/96/marker.png" alt="marker"/>Find the estate at</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary"><a href='#'>Go to map</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location