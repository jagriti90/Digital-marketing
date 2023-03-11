import React from 'react'

const Cookies = () => {
    // document.cookie = 'divFc_Cookies=' + document.getElementById('divFc_Cookies');

    // {
    //     if (document.cookie.length != 0)
    //     {
    //         alert('divFc_Cookies='+document.getElementById("divFc_Cookies"));
    //     }    
    //     else
    //     {
    //         alert("Cookie not available");
    //     }
    // }   

    return (
        <>
            <div id='divFc_Cookies' className='pop_box w-full flex bg-black/60 max-w-[1280px] ' >
                <div className='md:flex px-6'>
                    <div className='md:flex'>                    
                        <p id="onetrust-policy-text">
                        By clicking “Accept All Cookies”, you agree to the storing of
                        cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                        <a className='px-1 text-yellow-300' href="#">More Information</a>
                    </p>
                  
                    </div>
                <div className='px-2 py-2'>
                    <div className='one_trus_button_group flex'>
                        <button id='cookies' className='md:text-md font-bold text-yellow-400 bg-white px-2  h-10 w-[25vh] py-2 hover:bg-yellow-400 hover:text-white'>Cookies Setting</button>
                        <button id='reject' className='md:text-md font-bold  bg-white px-2 h-10 w-[25vh] py-2 ml-2 text-black  hover:bg-slate-300'>Reject all</button>
                        <button id='accept' className='md:text-md font-bold  bg-white px-2 h-10 w-[25vh] py-2  ml-2 text-black  hover:bg-slate-300'>Accept all</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cookies