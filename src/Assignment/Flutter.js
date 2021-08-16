
import React  , { useState } from 'react'
import { Link } from  'react-router-dom'
import './nav.css'
import './style.css'
import './EasyFramer.css'
const Test = () => {
    
    return (
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
                    <span></span>   
                    <span></span>  
                </div> 
                
            </section>
        </header>
    )
}
export default Test ; 