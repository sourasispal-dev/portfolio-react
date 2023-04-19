import React from "react";

export default function index() {

   
    return (
        <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-center">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/face.jpg-removebg-preview.png" alt="" className="object-cover h-80 sm:h-80 lg:h-80 w-80 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-6xl">Hi I'm
				<span className="dark:text-violet-400 px-2">Sourasis</span>Pal
			</h1>
			<p className="mt-6 mb-8 text-base sm:mb-12">Full Stack Web Developer
				<br className="hidden md:inline lg:hidden"/>{" | "}Undergrad @ Calcutta Institute of Engineering and Management
			</p>
			
		</div>
	</div>
</section>
    
        </>
    );
}