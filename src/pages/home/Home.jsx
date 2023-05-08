import React from 'react';
import Profile from '../../assets/home.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className='home__content'>
                <div className="home_data">
                    <h1 className="home__title">
                        <span>I'm Ashish Ranjan.</span> Software Developer
                    </h1>
                    <p className="home__description">
                        Seeking a position in the Field of Computer Science where i can utilize my skills to futher work towards a personal and professional development and contribute toward the prosperity of the organization.
                    </p>
                    <Link to='/about' className='button'>
                        More About me <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>

            </div>

            <div className="color__block">

            </div>
        </section>
    )
}

export default Home