
import React  , { useState } from 'react'
import { Link } from  'react-router-dom'
import './nav.css'
import './style.css'
import './EasyFramer.css'
const FlutterwaveNav = () => {
    let fullWidthClass = ["full-frame " , "bg-white " , "fixed-to-top " , "pad-top-10 " , "pad-bottom-10 " ,  "border-bottom-grey " ] 
    let mobileNavClass  = [] 
    let desktopNavClass = [] 
    let mobileClass = "mobile-navigations  "
    let [isOpen , setIsOpen] = useState(false)
    let [mClass , setMClass] = useState(" d-nothing out-of-view")
    let [toggler , setToggler] = useState("mobile-toggler relative change-toggle pad-top-15")
    const openNav = () => {
        setIsOpen(!isOpen)
        setMClass(mClass.includes("d-nothing") ? "" : " d-nothing out-of-view")
        setToggler(toggler.includes("change-toggle") ? "mobile-toggler relative pad-top-15" 
            : "mobile-toggler relative change-toggle pad-top-15")
    }
    return (
        <div className={fullWidthClass.join("")}>
            <header className="container ">
                <section className="frame justify-content-between">
                    <div className=" ">
                        <Link to="/" className="brand-name">
                        <span className='dark-text font-1-5'>Flutter<b className='bold-700'>wave</b></span>
                        </Link>
                    </div>
                    <nav className="d-sm-hide md-nav-2 pad-top-15">
                        <Link to="/" tabIndex="-1">Our Solutions</Link>
                        <Link to="/">Developers</Link>
                        <Link to="/">Resources</Link>
                        <Link to="/">Pricing</Link>
                        <Link to="/">Sign In</Link>
                        <Link to="/" className="md-btn-register no-border no-outline radius-5">CREATE ACCOUNT</Link>
                    </nav> 
                    
                    <div className="d-md-hide search-and-toggle pad-top-15 bd-dark">
                        <a className='button' onClick={openNav} href='' >
                            <span></span>   
                            <span></span>  
                        </a> 
                    </div> 
                    {isOpen ?
                        <section className={mobileClass + mClass} >
                            <nav className="md-nav-2 pad-top-15" >
                                <ul>
                                    <li>
                                        <Link to="/" tabIndex="-1" className='nav-space'>Our Solutions</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='nav-space'>Developers</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='nav-space'>Resources</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='nav-space'>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='nav-space'>Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="md-btn-register  no-border no-outline radius-5">CREATE ACCOUNT</Link>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                        : null 
                    }
                </section>
            </header>
        </div>
    )
}
export default FlutterwaveNav ; 