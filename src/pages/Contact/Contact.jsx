import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='banner'>
                <div className='text-group'>
                    <div className='title'>Contact</div>
                    <div className='text-wrapper'> Home / Contact</div>
                </div>
            </div>

            <div className='contact-form'>
                <div className='overlap'>
                    <div className='rectangle'>
                        <div className='form-group'>
                            <div className='overlap-group-wrapper'>
                                <div className='overlap-group'>
                                    <div className='send-now'>Send Now</div>
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

                        <div className='get-in-touch'>&lt;Get In Touch/&gt;</div>
                        <div className='lets-talk'>Hey! Let&apos;s Talk</div>

                        <div className='call-card'>
                            <div className='group-5'>
                                <div className='overlap-3'>
                                    <div className='linkedin'>
                                        <div className='text-wrapper-linkedin'>?</div>
                                    </div>
                                    <div className='instagram'>
                                        <div className='text-wrapper-ig'>?</div>
                                    </div>
                                    <div className='facebook'>
                                        <div className='text-wrapper-fb'>?</div>
                                    </div>
                                    <div className='twitter'>
                                        <div className='text-wrapper-x'>?</div>
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
                                            <div className='call-icon'>📞</div>
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
                                            <div className='email-icon'>?</div>
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
                                            <div className='visit-icon'>?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
