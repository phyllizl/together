import Card from './Components/card'
import Navbar from './Components/navbar'
import Paragraph from './Components/paragraph'
import Paragraph2 from './Components/paragraph2'
import Paragraph3 from './Components/paragraph3'
import Panel from './Components/panel'
import SiteMap from './Components/sitemap'
import Bottom from './Components/bottomPara'

const Main = () => {

    return (
        <>
            <div className="flex flex-wrap justify-center bg-white">
                <Navbar />
                <Paragraph3 justify="justify-center" textfield={true} bgColour="bg-darkPurple" textColour="text-white" image="/images/ss4.png"/>
                <div className="w-10/12">
                    <Panel />
                    <Paragraph bgColor="bg-white" image="/images/ss1.png"/>
                    <Paragraph3 justify="justify-end" bgColour="bg-gradient-to-r from-blue-300 to-gradientEnd" image="/images/ss5.png"/>
                    <Paragraph2 />
                    <Paragraph bgcolour="bg-customBlue" textColour="text-white" />
                    <Card />
                    <Paragraph3 justify="justify-center" textfield={true} bgColour="bg-darkPurple" textColour="text-white" />
                    <SiteMap />
                    <Bottom />
                </div>
            </div>
        </>
    )
}

export default Main;

//<div className="w-10/12 bg-pink-400">