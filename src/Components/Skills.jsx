import React from 'react'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import javascript from '../assets/img/javascript.png'
import npm from '../assets/img/npm.png'
import react from '../assets/img/react.png'
import bootstrap from '../assets/img/bootstrap.png'
import python from '../assets/img/Python.png'
import django from '../assets/img/django.png'
import mysql from '../assets/img/mysql.png'
import git from '../assets/img/git.png'

function Skills() {
    return (
        <section >
            <div className="container" data-aos="fade-up" data-aos-duration="1000">
                <h2 className='text-center' style={{ color: 'rgb(216, 55, 82)' }}><i class="fa-solid fa-code "></i></h2>
                <h1 className='text-center mb-5'>Programming <span className='text-warning'>Skills</span></h1>
                <div className="row">
                    <div className="col-12 gap-1  col-lg-12 gap-lg-5  col-row-1" data-aos="fade-down" data-aos-duration="1000">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={javascript} alt="" />
                        <img src={bootstrap} alt="" />
                        <img src={react} alt="" />
                        
                    </div>
                    <div className="col-12   col-lg-12 gap-lg-5 col-row-1" data-aos="fade-up" data-aos-duration="1000">
                        <img src={python} alt="" />
                        <img src={django} alt="" />
                        <img src={mysql} alt="" />
                        <img src={git} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills