import React, { useState } from 'react'
// import DemoCarousel from '../democarousel/DemoCarousel '
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillRightCircle } from "react-icons/ai";

// import { IconName } from "react-icons/ai";


const Navbar = () => {
  const [Toggle, SetToggle] = useState(false)
  const navhandling = () => {
    SetToggle(!Toggle)
  }


  return (
    <>
      <div className=' max-h-full  bg-cover justify-between items-center max-auto box-border max-w-[1280px]  h-full flex-col  font-family: Manrope sans-serif '>
        <div className='relative  h-[100vh]'>
          <Carousel className='max-w-[1280px] max-h-full  text-white text-bold text-3xl'     
     autoPlay
     infiniteLoop
     showArrows={false}>
                   <div>
                  
              <img 
             itemId={3}
               className='w-100 d-block h-screen'
              src='https://img.freepik.com/premium-photo/vinnytsia-ukraine-june-17-2022-ukrainian-girls-are-most-beautiful-world_647999-361.jpg?w=996'
                alt='/' />
              {/* <p className="legend">Radhe Radhe</p> */}
              <p className='absolute top-[35vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'>We help enterprices</p>
              <p className='absolute top-[43vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'>toward the <strong>sunshine,</strong></p>
              <p className='absolute top-[50vh] left-[5vh] md:text-4xl sm:text-3xl text-4xl  font-bold'>and shadows will fall behind you.</p>
            <button className= ' border-r-2 border-red-500 font-bold  absolute bg-white text-sm itmes-center px-3 py-2 h-9 w-[35vh] rounded-lg top-[70vh] left-[5vh] text-black'>Let's get Started</button>
            </div>
            <div>
              <img
                itemId={1}
                className='w-100 d-block h-screen'
                src='https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_1280.jpg'
                alt='/' />
              {/* <p className="legend">Radhe Radhe</p> */}
                           <p className='absolute top-[35vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl text-yellow-900'>Keep your face always </p>
              <p className='absolute top-[43vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl  text-yellow-900'>tranform digital <strong>ecosystem</strong></p>
              <p className='absolute top-[50vh] left-[5vh] md:text-4xl sm:text-3xl text-4xl  font-bold  text-yellow-900'>Nulla vitae elit libero</p>
              <button className= ' font-bold absolute bg-white text-sm itmes-center px-3 py-2 h-9 w-[35vh] rounded-lg top-[70vh] left-[5vh] text-black'>Let's get Started</button>

            </div>
            <div>
              <img 
             itemId={2}
              className='w-100 d-block h-screen'
              src='https://t4.ftcdn.net/jpg/04/10/34/17/240_F_410341790_FB2ONCZCgCFd9c4YBdKe6zSwYyMy6o8C.jpg'
                alt='/' />
              {/* <p className="legend">Radhe Radhe</p> */}
                           <p className='absolute top-[35vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'>The act of thinking about or </p>
              <p className='absolute top-[43vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'> about or considering <strong>something,</strong></p>
              <p className='absolute top-[50vh] left-[5vh] md:text-4xl sm:text-3xl text-4xl  font-bold'>an idea or opinion, or a set of ideas </p>
              <button className= ' font-bold absolute bg-white text-sm itmes-center px-3 py-2  h-9 w-[35vh] rounded-lg top-[70vh] left-[5vh] text-black'>Let's get Started</button>
            </div>
            <div>
              <img 
             itemId={3}
               className='w-100 d-block h-screen'
              src='https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977_1280.jpg'
                alt='/' />
              {/* <p className="legend">Radhe Radhe</p> */}
                          <p className='absolute top-[35vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'>When you have a dream,</p>
              <p className='absolute top-[43vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'>you've got to grab it  <strong>and never let go</strong></p>
              <p className='absolute top-[50vh] left-[5vh] md:text-4xl sm:text-3xl text-4xl  font-bold'>Nothing is impossible. ...</p>
              <button className= 'font-bold  absolute bg-white text-sm itmes-center px-3 py-2 h-9 w-[35vh] rounded-lg top-[70vh] left-[5vh] text-black'>Let's get Started</button>
            </div>
            <div>
              <img 
             itemId={3}
               className='w-100 d-block h-screen'
              src='https://t4.ftcdn.net/jpg/00/43/90/37/240_F_43903732_X1Z2gzy497aisgME62crmU00Sf8smP59.jpg'
                alt='/' />
              {/* <p className="legend">Radhe Radhe</p> */}
                          <p className='absolute top-[35vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl '>The bad news is time flies</p>
              <p className='absolute top-[43vh] left-[5vh] md:text-4xl sm:text-3xl text-3xl'>There is nothing  <strong>impossible</strong></p>
              <p className='absolute top-[50vh] left-[5vh] md:text-4xl sm:text-3xl text-4xl  font-bold'> to they who will try.</p>
              <button className= 'font-bold  absolute bg-white text-sm itmes-center px-3 py-2 h-9 w-[35vh] rounded-lg top-[70vh] left-[5vh] text-black'>Let's get Started</button>
            </div>
          </Carousel>
        </div>
        <div className='absolute top-2 left-0 right-6 text-yellow-400 '>
          <div className=' md:mt-1'>
            <div className='flex justify-between items-center h-24 max-w-[1280px] max-auto px-4 top-0 right-0'>
              <p className='w-full font-bold text-3xl px-6 '>Radhe Radhe</p>
              <div className='relative top-[-4vh]  right-0'>
                <ul>
                  <li className='font-bold text-white'>MENU</li>
                </ul>
                <div onClick={(navhandling)} className=' mx-auto font-extrabold absolute text-xl text-white ' >
                  {Toggle ? <AiOutlineClose size={50} /> : <AiOutlinePlus size={50} />}
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className={Toggle ? 'fixed left-0  text-[#fff] top-0 w-[100%] h-[95vh] border-b border-r-gray-900 bg-neutral-700 ease-out duration-300' : 'fixed left-[-100%]'}>
          <div className=' md:mt-2 '>
            <div className='flex justify-between items-center h-24 max-w-[1340px] max-auto px-4'>
              <p className='w-full font-bold text-3xl px-6'>Radhe Radhe</p>
              <div className='relative top-[-3vh] left-0 right-0 mr-6'>
                <ul>
                  <li className='font-bold '>MENU</li>
                </ul>
                <div onClick={(navhandling)} className='block mx-auto font-extrabold absolute text-xl'>
                  {Toggle ? <AiOutlineClose size={50} /> : <AiOutlinePlus size={50} />}
                </div>
              </div>
            </div>
          </div>
          <ul className='uppercase text-neutral-500 text-2xl '>
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Service</li>
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Solution</li> 
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Technology & Platforms</li>
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Industries</li>
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>About Us</li>
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Case Studies</li> 
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Career</li>
        <li className='p-2 border-b border-gray-600  hover:text-white px-10'>Contact Us</li>
      </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar