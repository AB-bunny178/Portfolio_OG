import React from 'react';
import './About.css';
import Image from '../../assets/profile1.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm PramodKumar, Im an Web developer and UiUx Designer , I studied at Kakatiya instute of technology and science at Warangal, where I completed my Graduation in Software Development.<br /><br />
                            Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanidng my portfolio by building more projects that I can add on here, And seeking for great collaboration with comapanies.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>UIUX</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About