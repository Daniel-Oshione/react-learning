import firstImg from "./assets/images/image-web-3-desktop.jpg"

function Body(){
    return(
        <>
        <section className="bodySection flex justify-between px-10 mb-20">
            <div className="flex flex-col">
                <img src={firstImg} alt="displayimage" className="displayImage"/>
                <div className="flex justify-between mt-5">
                    <h1 className="text-5xl font-bold">The Bright <br />
                    Future Of <br />
                    Web 3.0?
                    </h1>
                    <div>
                        <p className="text-xs mb-9 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                         Excepturi aliquid voluptates impedit atque maiores repellat nobis <br />
                          fugiat labore a ratione reiciendis possimus cum, rem dignissimos alias <br />
                           facilis velit ullam et!</p>

                        <button className="bg-red-500 py-2 px-7 font-bold text-sm">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-950 text-left px-3 py-5">
                <div>
            <h1 className="text-yellow-500 text-4xl mb-4">New</h1>
            <div className="mb-7">
                <h2 className="text-xl text-white hover:text-yellow-500 cursor-pointer">Hydogen vs Electric cars</h2>
                <p className="text-gray-400">Will hydrogen fueled cares ever catch up to EV?</p> <br /> <br />
                <hr />
            </div>
            <div className="mb-7">
                <h2 className="text-xl text-white hover:text-yellow-500 cursor-pointer">The Downside of AI Artistry</h2>
                <p className="text-gray-400">What are the possible adverse effects of <br />
                 ondemand AI image generation?</p> <br /> <br />
                <hr />
            </div>
            <div>
                <h2 className="text-xl text-white hover:text-yellow-500 cursor-pointer" >Is VC funding Drying Up</h2>
                <p className="text-gray-400">Private funding by VC is down 50% <br />
                YOY. We take a look at what that means.
                </p>
            </div>
            </div>
            </div>
        </section>
        </>
    );

}

export default Body