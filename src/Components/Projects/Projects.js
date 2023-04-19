import React from 'react'

function Projects() {
  return (
	<div>
		<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Projects</h2>
			<h5 className="font-serif text-sm dark:text-gray-400">- What I Prove -</h5>
		</div>

		<div className="justify-center grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">

			{/* <article className="flex shadow-md shadow-black hover:shadow-sm hover:shadow-blue-500 flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="!#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://assets.materialup.com/uploads/cfe42246-e49f-4166-91ce-246e253eae27/preview.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">

					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-500">Weather App</h3>
					<p className="text-xs tracking-wider text-white">User can see temparature</p>
				</div>
			</article> */}

			<article className="flex shadow-md shadow-black hover:shadow-sm hover:shadow-red-500  flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="https://digital-alarm-clock-javascript.vercel.app/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1305/2183/products/DigitalEmojiAlarmClock_10_1024x1024_1_1200x1200.jpg?v=1652945085" />
				</a>

				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-500">Digital Alarm Clock</h3>	
					<p className="text-xs tracking-wider text-white">User can set alarm</p>
				</div>
			</article>

			<article className="flex shadow-md shadow-black hover:shadow-sm hover:shadow-green-500 flex-col dark:bg-gray-900">

				<a rel="noopener noreferrer" href="https://age-calculator-umber.vercel.app/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://tools.apgy.in/img/age-calculator.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-500">Age Calculator</h3>
					<p className="text-xs tracking-wider text-white">User can calculate their Age</p>
				</div>
			</article>
			
			<article className="flex shadow-md shadow-black hover:shadow-sm hover:shadow-blue-500 flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="https://landing-page-blue-nu.vercel.app/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://uploads-ssl.webflow.com/62d0341d687fc5fc25e03d0f/6385f60a27432d82c3ade23d_ReConvert-Shopify-Landing-Page.png" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					

					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug  text-violet-500">Landing Page</h3>

					<a rel="noopener noreferrer" href="!#" className="text-xs tracking-wider text-white">Simple user interface</a>

					
				</div>
			</article>
		</div>
	</div>
</section>
	</div>
  )
}

export default Projects