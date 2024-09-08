import React from 'react'



const ImageTray = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <span className='w-[100%] text-center md:text-left md:w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur harum error ipsa, molestiae laborum veniam quia nulla quasi? Culpa expedita impedit ullam ab ratione. Laudantium quos eius aperiam? Aperiam.</span>
      <div className="carousel carousel-center rounded-box w-[100%] md:w-[60%]">
        <div className="carousel carousel-center rounded-box space-x-4 ">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="rounded-box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageTray