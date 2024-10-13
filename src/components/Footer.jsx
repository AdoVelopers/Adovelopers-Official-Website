import React from 'react';
import '../styles/Footer.css';
import ReactIcon from '/src/assets/icons/react.png'
import Cloud from '/src/assets/icons/cloud-computing.png'
import Python from '/src/assets/icons/Python.png'
import LinkedIn from '/src/assets/icons/linkedin.png'
import Facebook from '/src/assets/icons/facebook.png'
import Twitter from '/src/assets/icons/twitter.png'
import Instagram from '/src/assets/icons/instagram.png'
import Ado from '/src/assets/icons/Adovelopers.png'

function Footer() {
    return (
        <footer>
            <div className="footer-background">
                <div className="group">

                    <div className="logo-section">
                        <div className='g1'>
                            <div className="logo-background"></div>
                            <div className="logo-text"><img src={Ado} alt="" /><p>Adovelopers</p></div>
                        </div>

                        {/* Footer Text Section */}
                        <div className="footer-text">
                            Innovative tech solutions in AI, automation, <br />
                            and app development<br /> to help businesses grow <br />
                            and adapt to the digital world.
                        </div>

                        <div className='socials'>
                            <div><img src={LinkedIn} alt="" /></div>
                            <div><img src={Instagram} alt="" /></div>
                            <div><img src={Facebook} alt="" /></div>
                            <div><img src={Twitter} alt="" /></div>
                        </div>
                    </div>
                    <div className="footer-services">
                        <div className="services-title">Services</div>
                        <div className="service">Web Design/Development</div>
                        <div className="service">App Development</div>
                        <div className="service">UI/UX Design</div>
                        <div className="service">Cloud Services</div>
                        <div className="service">AI & ML Solutions</div>
                        <div className="service">Automation Services</div>
                    </div>


                    <div className="career-section">
                        <div className="career-title">Career</div>

                        <div className="job-role">
                            <div className="icon-container">
                                <img src={ReactIcon} alt="React Icon" />
                            </div>
                            <div className="role-info">
                                <div className="role-title">MERN Stack</div>
                                <div className="role-experience">1-5 Years of Exp.</div>
                            </div>
                        </div>

                        <div className="job-role">
                            <div className="icon-container">
                                <img src={Cloud} alt="Cloud Icon" />
                            </div>
                            <div className="role-info">
                                <div className="role-title">Cloud Computing</div>
                                <div className="role-experience">1-5 Years of Exp.</div>
                            </div>
                        </div>

                        <div className="job-role">
                            <div className="icon-container">
                                <img src={Python} alt="Python Icon" />
                            </div>
                            <div className="role-info">
                                <div className="role-title">Python Developer</div>
                                <div className="role-experience">1-5 Years of Exp.</div>
                            </div>
                        </div>
                    </div>


                    <div className='subs'>
                        <div className="subscribe-section">
                            <div className="subscribe-title">Subscribe Us</div>
                            <div className="footer-text-large">
                                Stay up to date with the <br />latest in AI, web, and app <br /> development.
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="email-input"
                            />
                            <button className="subscribe-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
