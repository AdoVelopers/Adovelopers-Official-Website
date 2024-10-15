import React from 'react'
import './Contact.css';
import LinkedInLogo from '../../assets/linkedin.svg';
import InstagramLogo from '../../assets/instagram.svg';
import FacebookLogo from '../../assets/facebook.svg';
import TwitterLogo from '../../assets/twitter.svg';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='banner'>
                <div className='text-group'>
                    <div className='title'>Contact</div>
                    <div className='text-wrapper'> Home / Contact</div>
                </div>
            </div>

            {/* CONTACT FORM SECTION */}
            <div className='contact-form'>
                <div className='overlap'>
                    <div className='rectangle'>

                        <div className='get-in-touch'>&lt;Get In Touch/&gt;</div>
                        <div className='lets-talk'>Hey! Let&apos;s Talk</div>

                        <div className='form-group'>
                            <div className='overlap-group-wrapper'>
                                <div className='overlap-group'>
                                    <a href='/' className='send-now' onClick={sendNow}>Send Now</a>
                                </div>
                            </div>

                            <div className='name-wrapper'>
                                <div className='div-wrapper'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        className='input-field name'
                                    />
                                </div>
                            </div>

                            <div className='email-wrapper'>
                                <div className='div-wrapper'>
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        className='input-field email'
                                    />
                                </div>
                            </div>

                            <div className='phone-wrapper'>
                                <div className='div-wrapper'>
                                    <input
                                        type='tel'
                                        placeholder='Phone'
                                        className='input-field phone'
                                    />
                                </div>
                            </div>

                            <div className='message-wrapper'>
                                <div className='div-wrapper'>
                                    <textarea className="input-field" maxLength="399" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='call-card'>
                            <div className='group-5'>
                                <div className='overlap-3'>
                                    <div className='linkedin'>
                                        <div className='text-wrapper-linkedin'>
                                            <img src={LinkedInLogo} alt="LinkedIn Logo" width="40" height="40" />
                                        </div>
                                    </div>
                                    <div className='instagram'>
                                        <div className='text-wrapper-ig'>
                                            <img src={InstagramLogo} alt="Instagram Logo" width="40" height="40" />
                                        </div>
                                    </div>
                                    <div className='facebook'>
                                        <div className='text-wrapper-fb'>
                                            <img src={FacebookLogo} alt="Facebook Logo" width="40" height="40" />
                                        </div>
                                    </div>
                                    <div className='twitter'>
                                        <div className='text-wrapper-x'>
                                            <img src={TwitterLogo} alt="Twitter Logo" width="40" height="40" />
                                        </div>
                                    </div>
                                    <div className='follow-us'>Follow Us</div>
                                    <div className='call-anytime-group'>
                                        <div className='call-anytime-wrapper'>Call Anytime</div>
                                        <p className='mobile'>
                                            + 639 7623 5447
                                            <br />
                                            &nbsp;&nbsp;054 884 6685
                                        </p>
                                        <div className='call-icon-group'>
                                            <div className='call-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="#3AAFA9">
                                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.68.58 1 1 0 011 1v3.59a1 1 0 01-1 1A18 18 0 013 6a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.58 3.68 1 1 0 01-.24 1.05z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='send-email-group'>
                                        <div className='send-email'>Send Email</div>
                                        <div className='email-address'>
                                            adovelopers@gmail.com
                                            <br />
                                            admin@adovelopers.cloud
                                        </div>
                                        <div className='email-icon-group'>
                                            <div className='email-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="#3AAFA9">
                                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.511l-8 4.8-8-4.8V6h16zm-16 12V8.489l8 4.8 8-4.8V18H4z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='visit-us-group'>
                                        <div className='visit-us'>Visit Us</div>
                                        <div className='address'>
                                            20 Island Park Road,
                                            <br />
                                            Nabua, Camarines Sur, 4434
                                        </div>
                                        <div className='visit-icon-group'>
                                            <div className='visit-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="#3AAFA9">
                                                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* QUOTES SECTION */}
            <div className='box'>
                <div className='quote-wrapper'>
                    <div className='quote-overlap'>
                        <div className="overlay">
                            <div className='get-in-touch-group'>
                                <div className='get-in-touch-wrapper'>
                                    <a href='/contact' className='get-in-touch-button' onClick={GiTButton}>Get in Touch</a>
                                </div>
                            </div>
                            <p className='quotes'>
                                &quot;In Technology, we dont just solve problems, we create possibilities&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
const sendNow = () => {
    console.log('Send Now button clicked!');
};
const GiTButton = () => {
    console.log('Get in Touch button clicked!');
};


export default Contact
