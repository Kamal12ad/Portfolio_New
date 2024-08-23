import React from 'react'
import linkedin from '../assets/img/linkedin.png'
import instagram from '../assets/img/instagram.jpg'
import github from '../assets/img/github.png'



function About() {
    return (
        <section className='about-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-me" data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='mb-3'>About Me</h3>
                        <p data-aos="fade-up" data-aos-duration="1000">Hello! I'm Kamaleshwaran, a passionate and enthusiastic frontend developer with a keen eye for detail and a drive for creating visually appealing and user-friendly web experiences. As a recent graduate with a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive websites. I have hands-on experience with modern frameworks like React and am dedicated to continuously learning and improving my skills.
                        </p>
                        <button data-aos="fade-up" data-aos-duration="1000" className='btn btn-primary w-50'>Download CV</button>
                        <div className="connect" data-aos="fade-up" data-aos-duration="1000">
                            <h4 >Stay Connect With Me</h4>
                            <a href="" className='pe-3'><img src={linkedin} alt="" /></a>
                            <a href="" className='pe-3'><img src={instagram} alt="" /></a>
                            <a href="" className='pe-3'><img src={github} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 about-me2" data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='mb-3'>Education</h3>
                        <div className="edu-detail" data-aos="fade-up" data-aos-duration="2000">
                            <span className='edu-text'>BCA - Periyar Maniammai University</span>
                            <span className='d-block'>Percentage : 62% </span>
                            <span>2020-2023</span>
                        </div>
                        <div className="edu-detail" data-aos="fade-up" data-aos-duration="2000">
                            <span className='edu-text'>HSC - Sri Bharathidasan Matric Hr Sec School</span>
                            <span className='d-block'>Percentage : 63% </span>
                            <span>2020-2023</span>
                        </div>
                        <div className="edu-detail" data-aos="fade-up" data-aos-duration="2000">
                            <span className='edu-text'>SSLC - Sri Bharathidasan Matric Hr Sec School</span>
                            <span className='d-block'>Percentage : 75% </span>
                            <span>2020-2023</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About