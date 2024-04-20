import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pb-[2rem] pt-[7rem] bg-gray-100'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
            {/* First */}
            <div>
                <h1 className='footer__heading'>
                    Support
                </h1>
                <div>
                    <a href="#" className="footer__link">Help Center</a>
                    <a href="#" className="footer__link">Safety Information</a>
                    <a href="#" className="footer__link">Cancellation Options</a>
                    <a href="#" className="footer__link">Medical Doctor</a>
                </div>
            </div>
            {/* Second */}
            <div>
                <h1 className='footer__heading'>
                    Company
                </h1>
                <div>
                    <a href="#" className="footer__link">About Us</a>
                    <a href="#" className="footer__link">Community Blog</a>
                    <a href="#" className="footer__link">Careers</a>
                    <a href="#" className="footer__link">Privacy Policy</a>
                </div>
            </div>
            {/* third */}
            <div>
                <h1 className='footer__heading'>
                    Contact
                </h1>
                <div>
                    <a href="#" className="footer__link">Partnership</a>
                    <a href="#" className="footer__link">FAQ</a>
                    <a href="#" className="footer__link">Get in Touch</a>
                </div>
            </div>
            {/* Fourth */}
            <div>
                <h1 className='footer__heading'>
                    Social
                </h1>
                <div className='flex items-center space-x-4 text-white text-[1.3rem]'>
                    <div className="footer__icon bg-[#0165e1]">
                        <FaFacebook/>
                    </div>
                    <div className="footer__icon bg-[#cd486b]">
                        <FaInstagram/>
                    </div>
                    <div className="footer__icon bg-[#1da1f2]">
                        <FaTwitter/>
                    </div>
                    <div className="footer__icon bg-[#cd201f]">
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer