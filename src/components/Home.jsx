import home from "../assets/home.jpg"

export const Home =()=>{
    return(
   <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
				<h1 className="text-3xl md:text-5xl p-2 text-orange-300 tracking-loose">Reserve your Pizza
</h1>
				<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">That is uniquely catered to you
				</h2>
				<p className="text-sm md:text-base text-gray-50 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at this layout.
                so Kiss
                </p>
				<button className="bg-transparent hover:bg-orange-300 text-orange-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-orange-300 hover:border-transparent">
					Order now</button>
			</div>
            <div className="p-8 mt-17 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-3/3  justify-end">
               
				<div className="h-auto flex flex-wrap content-end">
					<div>
						<img alt="" className="inline-block mx-auto max-w-lg h-auto hidden xl:block" src={home}/></div>
							</div>
						</div>
       
        </div>
    )
}