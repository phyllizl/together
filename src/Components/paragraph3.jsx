const Paragraph3 = ({justify, textfield = false, bgColour, textColour, image }) => {

    return (
        <div className={`w-full h-auto md:py-20 py-4 md:p-8 p-4 md:flex ${bgColour} items-center ${textColour}`}>
            <div className="md:text-4xl text-2xl pt-4 pb-2 w-full md:w-3/6 md:p-8 p-4 md:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <p className="text-base pt-4 pb-2 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis tempor vulputate. Etiam dictum laoreet felis, a feugiat ipsum volutpat eu. 
            </p>
            { textfield && 
                <form className="md:flex pt-4">
                    <input className="text-sm w-full md:w-40 h-8" type="text" name="input" placeholder="Enter your email address"/>
                    <button className="text-xs md:ml-4 md:w-auto px-4 bg-customBlue w-full" >Get a demo</button>
                </form>
            }
            </div>
            <div className={`flex ${justify} w-3/6 justify-center w-full pt-4 md:p-0`}>
                <img src={image}/>
            </div>
        </div>
    )
}

export default Paragraph3;