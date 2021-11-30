import { useState } from 'react';
import ContentSitemap from "./contentSitemap";

const SiteMap = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="w-full md:p-20 p-4 md:text-lg md:flex justify-center bg-darkPurple">

            <ContentSitemap setOpen={setOpen} open={open}/>
            <ContentSitemap setOpen={setOpen} open={open}/>
            <ContentSitemap setOpen={setOpen} open={open}/>
            <ContentSitemap setOpen={setOpen} open={open}/>
            
        </div>
    )
}

export default SiteMap;