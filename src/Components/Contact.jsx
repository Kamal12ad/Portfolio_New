import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

function Contact() {

    const handleSubmit = (e)=>{
         e.preventDefault()
            setTimeout(()=>{
            alert('Message send Success')
         },2000)
        
    }

    return (
        <section className='connect'>
            <div className="container">
                <div className="row">
                    <h2>Contact</h2>
                    <div className="col-12 order-2 order-lg-1 col-sm-12 col-md-12 col-lg-6 contact-1">
                        <div className="contact-info">
                            <p><FaLocationDot className='fs-2 me-2' />Chennai-India</p>
                        </div>
                        <div className="contact-info">
                            <p><IoIosMail className='fs-2 me-2' />kamaleditzz@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <p><IoCallSharp className='fs-2 me-2' />+917812862668</p>
                        </div>
                    </div>
                    <div  data-aos="zoom-in-up" data-aos-duration="1000" className="col-12 order-sm-1  col-sm-12 col-md-12 col-lg-6 form-container">
                        <form action="" onSubmit={handleSubmit} method="post">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact