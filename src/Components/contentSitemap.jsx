import { fontawesome } from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const ContentSitemap = ({open, setOpen}) => {

    const content = [
        'Nunc elementum',
        'Sit ac interdum',
        'Ac ut cras.',
        'Set ipsum lobortis',
        'Nulla maecenas nunc',
        'Purus'
    ]

    return (
        <div className="md:w-3/12 p-4 w-full text-white "> 
                <p className="pb-10 md:text-3xl font-bold md:inline-block hidden">Est.</p>
                {content.map((title) => (
                <div className="md:pt-4 md:block hidden">
                    <a href="">{title}</a><br />
                </div>
                ))}

                <div name="content" className="md:hidden">
                    <div className="flex">
                        <button className="font-bold pl-0 pb-4 text-2xl w-3/4 text-left">Est.</button>
                        <div className="text-white flex justify-end w-3/6">
                            <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faCaretDown}  />
                        </div>
                    </div>
                    { open &&
                        <div >
                            {content.map((title) => (
                                <a href="" value={title} className="block">{title}</a>
                            ))}
                        </div>
                    }
                </div>
        </div>
    )
}

export default ContentSitemap;