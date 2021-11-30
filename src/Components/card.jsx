const Card = () => {

     return (
        <>
        <div className="my-10 items-center md:flex md:p-8 p-4 md:p-20 py-6">
            <div className="md:w-3/6 w-full">
                <img className="object-cover p-8 " src="/images/ss2.png" alt="man"/>
            </div>

            <div className="md:w-3/6 w-full p-6 " >
                <p className="text-base font-extralight p-1">Lorem ipsum dolor sit amet.</p>
                <p className="text-base font-medium p-1" >adipiscing elit.</p>
                <p className="text-xl font-semibold pt-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="underline text-base font-medium pt-6">adipiscing elit.</p>
                <div className="w-full mt-7 flex">
                    <button className="bg-black w-4/12 " >button</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Card;