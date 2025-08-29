import imgA from "./assets/images/image-retro-pcs.jpg"
import imgB from "./assets/images/image-top-laptops.jpg"
import imgC from "./assets/images/image-gaming-growth.jpg"


function Footer(){
return(
    <>
    <div className="flex justify-between px-10 mb-10">
        <div className="flex justify-between">
            <img src={imgA} alt="Pc image" className="w-25 h-32 object-cover mr-5" />
            <div>
                <h1 className="text-orange-500 font-bold text-4xl">01</h1>
                <p className="text-indigo-950 font-bold text-xl">Reviving Retro PCs</p>
                <p className="text-gray-500 text-sm">
                    What happens when old PCs <br />
                    are given modern upgrades? 
                </p>
            </div>
        </div>
        <div className="flex justify-between">
        <img src={imgB} alt="Keyboard image" className="w-25 h-32 object-cover mr-5" />
        <div>
        <h1 className="text-orange-500 font-bold text-4xl">02</h1>
                <p className="text-indigo-950 font-bold text-xl">Top 10 Laptops OF {new Date().getFullYear()}</p>
                <p className="text-gray-500 text-sm">
                    Our best picks for various <br />
                    needs and budgets. 
                </p>  
        </div>
        </div>
        <div className="flex justify-between">
        <img src={imgC} alt="controller image" className="w-25 h-32 object-cover mr-5" />
        <div>
        <h1 className="text-orange-500 font-bold text-4xl">03</h1>
                <p className="text-indigo-950 font-bold text-xl">The Growth of Gaming</p>
                <p className="text-gray-500 text-sm">
                    How the pandemic has sparked <br />
                    fresh opportunities. 
                </p>   
        </div>
        </div>
    </div>
    </>
);
}

export default Footer