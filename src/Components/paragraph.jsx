const Paragraph = ({bgcolour, textColour, image}) => {


    return (
        <div className={`${bgcolour} ${textColour} w-full h-auto md:py-20 md:p-8 py-4 bg-white`}>
            <div className="w-3/6 md:left-10 md:top-20 md:text-left w-full p-4 ">
                <div className="md:text-4xl text-2xl"> 
                    Sem enim cursus orci at.
                </div>
                <div className="md:text-xl text-sm md:text-left font-extralight pt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ipsum sapien. Sed in orci nulla. Integer pretium lacinia mollis. 
                </div>
                <p className=" md:flex items-center mt-7 w-full md:text-xl text-sm underline">
                    learn more
                </p>
            </div>
            <div>
                <img src={image} className="w-full object-fill md:px-40 md:py-20" />
            </div>
        </div>
    )
}

export default Paragraph;