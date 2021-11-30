import { fontawesome } from '@fortawesome/fontawesome-free'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

    const navBarItems = ['Cras', 'Cras', 'Fringilla', 'Enim dolor.']

    return (
        <div className="w-full h-10 flex bg-customBlue text-white">
            <div className="w-6/12 hidden md:flex">
                {navBarItems.map((item) => <div className="m-5 items-center flex">{item}</div>)}
            </div>
            <div className="justify-end w-6/12 hidden md:flex">
                <div className="flex items-center m-4">login</div>
                <button>demo</button>
            </div>

            <div className="flex justify-end md:hidden text-base p-2">
                {/* <img src="/images/logo.png" className="w-8 h-4"/> */}
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Navbar;