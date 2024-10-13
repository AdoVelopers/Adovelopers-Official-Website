import React, { useState } from 'react';
import WeAreHere from '/src/assets/weAreHere.png';
import Group65 from '/src/assets/Group65.png';
import Image1 from '/src/assets/img1.png';
import './Home.css';
import Advice from '/src/assets/advice.png'
import Card1 from '/src/assets/icons/Black.png'
import Card2 from '/src/assets/icons/Black (1).png'
import Card3 from '/src/assets/icons/Black (2).png'
import Card4 from '/src/assets/icons/Black (3).png'
import WebDesign from '/src/assets/icons/web.png'
import Ui from '/src/assets/icons/ui.png'
import Juan from '/src/assets/Juan.png'
import Goal from '/src/assets/our-goal.png'
import Vision from '/src/assets/our-vision.png'
import Cloud from '/src/assets/icons/cloud.png'
import AppDev from '/src/assets/icons/appdev.png'
import Ai from '/src/assets/icons/ai.png'
import Automation from '/src/assets/icons/automation.png'

import Karl from '/src/assets/ourlead/karl.png'
import Aaron from '/src/assets/ourlead/aaron.png'
import Bryan from '/src/assets/ourlead/bryan.png'
import JuanB from '/src/assets/ourlead/juan.png'



function Home() {
    return (
        <div className='home-container'>
            <div className='circle'></div>
            <div className='text-img'>
                <div className='text-container'>
                    <div>
                        <p className='title-sect'>&lt;We are Here/&gt;</p>
                    </div>
                    <div className='text-item'>Innovative</div>
                    <div className='text-item'>Tech Solutions</div>
                    <div className='text-item'>For Business Growth</div>
                    <div className='button-container'>
                        <button className='view-more-btn'>View More</button>
                    </div>
                </div>
                <div className='images-container'><img src={Group65} alt="Group65" /></div>
                <div class="parent-container">
                    <div class="circle2"></div>
                </div>
            </div>

            <div className='about-us'>

                <div className="circle3"></div>
                <div className="image-container2">
                    <img src={Image1} alt="Image1" />
                </div>
                <div className='about-us2'>
                    <div>
                        <p className='title-sect'>&lt;About us/&gt;</p>
                    </div>
                    <div>
                        <h2>Driving Business Success with Smart Tech</h2>
                    </div>

                    <div className="about-content">
                        <p>
                            We specialize in helping businesses innovate and thrive in today’s digital landscape.
                            From AI integrations to full-scale website and mobile app development,
                            our services are designed to push your business forward.
                        </p>
                        <div className="contact-info">

                            <div className='advice-container'>
                                <img src={Advice} alt="advice" /></div>

                            <div className='advice-child'>
                                <h4>Get Instant Professional Advice</h4>
                                <div className='num-container'><p>Ready to Help:</p> <p className='num'> +639 7623 5447</p></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='planning'>
                <div className='planning-process'>
                    <p className='title-sect'>&lt;Planning/&gt;</p>
                    <div>Our Process</div>
                </div>
                <div className='planning-cards'>
                    <div className='card'>
                        <h1>01</h1>
                        <div className='card-img'><img src={Card1} alt="" /></div>
                        <div><h2>Research</h2></div>
                        <div className='lines'>
                            <div className='line1'></div> <div className='line2'></div>
                        </div>
                        <div><p>We conduct in-depth analysis to understand your business needs and objectives.</p></div>

                    </div>

                    <div className='card'>
                        <h1>02</h1>
                        <div className='card-img'><img src={Card2} alt="" /></div>
                        <div><h2>Design</h2></div>
                        <div className='lines'>
                            <div className='line1'></div> <div className='line2'></div>
                        </div>
                        <div><p>We create sleek, user-friendly designs that align with your brand.</p></div>

                    </div>
                    <div className='card'>
                        <h1>03</h1>
                        <div className='card-img'><img src={Card3} alt="" /></div>
                        <div><h2>Develop</h2></div>
                        <div className='lines'>
                            <div className='line1'></div> <div className='line2'></div>
                        </div>
                        <div><p>We bring your vision to life with advanced AI, web, and mobile development.</p></div>
                    </div>

                    <div className='card'>
                        <h1>04</h1>
                        <div className='card-img'><img src={Card4} alt="" /></div>
                        <div className='test'>
                            <div><h2>Test</h2></div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div>We thoroughly test every solution to ensure top performance and security.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='wwd-container'>
                <div className='www-juan'>
                    <img src={Juan} alt="" />
                </div>

                <div className='wwd'>
                    <p className='title-sect'>&lt;What We Do/&gt;</p>
                    <div className='des'>
                        <h2>We Develop Products That People Love to Use</h2>
                    </div>
                    <div>
                        <p>
                            At Adovelopers, we’re committed to creating tech solutions that are not only functional but also enjoyable for users. Our team delivers exceptional quality in every project, from AI-powered applications to mobile and web solutions.
                        </p>
                    </div>

                    <div className="vision-goal-container">
                        <div className="vision-goal-item">
                            <div className="vision-goal-img">
                                <img src={Goal} alt="Goal Image" />
                            </div>
                            <div className="vision-goal-text">
                                <h2 className='wwd-title'>Our Vision</h2>
                                <p>Innovating the future with smart, user-friendly tech.</p>
                            </div>
                        </div>
                        <div className="vision-goal-item">
                            <div className="vision-goal-img">
                                <img src={Vision} alt="Vision Image" />
                            </div>
                            <div className="vision-goal-text">
                                <h2 className='wwd-title'>Our Goal</h2>
                                <p>Empowering businesses with scalable solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='view-more-container'>
                        <button className='view-more'>View More</button>
                    </div>
                </div>
            </div>


            <div className='services'>
                <div>
                    <p className='title-sect'>&lt;Services/&gt;</p>
                </div>
                <div>
                    <h2>Our Expertise</h2>
                </div>
                <div className='services-cards'>

                    <div className='service-first-row'>
                        <div className='card'>
                            <div className='card-img'><img src={WebDesign} alt="" /></div>
                            <div className='card-title'>Ui/UX Design</div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div><p>We design and build responsive, scalable websites that deliver seamless user experiences and are optimized for performance.</p></div>
                        </div>

                        <div className='card'>
                            <div className='card-img'><img src={Ui} alt="" /></div>
                            <div className='card-title'>Web Design / Development</div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div><p>Our design team creates user-centric interfaces that prioritize usability and ensure an intuitive interaction with your digital products.  </p></div>
                        </div>

                        <div className='card'>
                            <div className='card-img'><img src={Cloud} alt="" /></div>
                            <div className='card-title'>Cloud Services</div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div><p>Our cloud solutions enable businesses to scale effortlessly, ensuring secure, flexible, and efficient access to resources anytime, anywhere.</p></div>
                        </div>
                    </div>

                    <div className='service-second-row'>
                        <div className='card'>
                            <div className='card-img'><img src={AppDev} alt="" /></div>
                            <div className='card-title'>App Development</div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div>We build mobile apps integrated with machine learning and automation technologies to deliver personalized, data-powered user experiences.</div>
                        </div>

                        <div className='card'>
                            <div className='card-img'><img src={Ai} alt="" /></div>
                            <div className='card-title'>AI & Machine Learning Solutions</div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div>We develop advanced AI and machine learning models to automate tasks, enhance decision-making, and provide data-driven insights tailored to your business.</div>
                        </div>

                        <div className='card'>
                            <div className='card-img-container'><div className='card-img'><img src={Automation} alt="" /></div></div>
                            <div className='card-title'>Automation Services</div>
                            <div className='lines'>
                                <div className='line1'></div> <div className='line2'></div>
                            </div>
                            <div><p>Streamline your operations with our automation solutions, reducing manual work and improving efficiency.</p></div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='our-leaders-container'>
                <div><p className='title-sect'>&lt;Team/&gt;</p>
                    <h2 className='our-lead'>Our Leaders</h2></div>

                <div className='our-lead-cards'>
                    <div className='karl'>
                        <div><img src={Karl} alt="" /></div>
                        <div><h4>Karl Santiago B. Bernaldez</h4></div>
                        <div><p>CEO, President</p></div>
                    </div>

                    <div className='Aaron'>
                        <div><img src={Aaron} alt="" /></div>
                        <div><h4>Aaron Francis L. Pacardo</h4></div>
                        <div><p>VP, AI Lead Developer</p></div>
                    </div>


                    <div className='bryan'>
                        <div><img src={Bryan} alt="" /></div>
                        <div><h4>Bryan N. Lomerio</h4></div>
                        <div><p>Lead Developer</p></div>
                    </div>


                    <div className='juan'>
                        <div><img src={JuanB} alt="" /></div>
                        <div><h4>Juan Rodrigo C Badiola</h4></div>
                        <div><p>CTO, Lead System Analyst</p></div>
                    </div>
                </div>
                <div className='seemore'>
                    See More
                </div>


            </div>

            <div>
                <div>
                    <div><p className='title-sect'>&lt;From our/&gt;</p>
                        <h2 className='our-lead'>Our Leaders</h2></div>

                </div>

            </div>

        </div>
    );
}

export default Home;
