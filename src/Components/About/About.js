import React, { useState } from "react";
function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-gray-100 overflow-y-hidden" style={{ minHeight: 200 }}>
            {/* Code block starts */}
            <dh-component>
              
                <div className="bg-gray-100">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-12">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl text-center text-indigo-700 font-semibold leading-7 md:leading-10 "> About me
                            </h1>
                            <p className="mt-5 sm:mt-5 lg:w-10/12 text-gray-500 font-normal text-justify text-sm sm:text-sm">Hi Geeks, i am Information Technology Sophomore at Calcutta Institute of Engineering and Management college, Kolkata. I am well-skilled
                     Front-end web developer. My Skills is in Java, MySql, JavaScript, Html, CSS. I am interested in Music,
                    cooking, wandering, cricket. I am also a campus Ambassador at Ementora Services.
                    More Details is available on my assigned CV which i have mentioned below. </p>
                        </div>
                        <div className="flex justify-center items-center">

                            
                            <a href="/Sourasis.pdf" 
                         className= "   bg-violet-500 transition duration-150 ease-in-out hover:bg-rose-700 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
                            download>Download CV</a>
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Index;
