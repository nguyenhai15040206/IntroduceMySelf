import React from 'react';
import { useHistory } from 'react-router-dom';
import FormEMail from './components/FormSendEMail/Index';
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact(props) {

    const history = useHistory();
    const backHome = () => {
        history.push('/HomePage');
    }

    const handleOnSumit = (e) => {
        console.log('My name is Hai', e);

        emailjs.send("service_r1u1jpm", "template_t31leab", {
            name: e.name,
            email: e.email,
            message: e.message,
            subject: e.subject,
        }, 'user_ZsWBUNoFRUr0MhwI1FCDG').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


    }
    return (
        <div id="#contact-main" className="animate__animated animate__slideInRight animate__delay-0.5s">
            <div className="container-fluid">
                <button onClick={() => { backHome() }} id="back-home" className="btn btn-outline-light">&nbsp;x&nbsp;</button>
            </div>
            <div className="container">
                <div className="header mt-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading page-heading">
                                <p className="section-description">Feel free to contact me anytimes</p>
                                <h2 className="section-title">Get in Touch</h2>
                                <div className="animated-bar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-section single-section">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <h4 className="contact-title">Message Me</h4>
                            <FormEMail
                                onSubmit={handleOnSumit}
                            />
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="contact-info">
                                <h4 className="content-title">Contact Info</h4>
                                <p className="info-description">Always available for freelance work if the right project comes along, Feel
                                    free to contact me!</p>
                                <ul className="list-unstyled list-info">
                                    <li>
                                        <div className="media align-items-center"><span className="info-icon"><i className="icon fas fa-compact-disc" /></span>
                                            <div className="media-body info-details">
                                                <h6 className="info-type">Name</h6><span className="info-value">Nguyễn Tấn Hải</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media align-items-center"><span className="info-icon"><i className="icon fas fa-map" /></span>
                                            <div className="media-body info-details">
                                                <h6 className="info-type">Location</h6><span className="info-value">Hẻm 35 Nguyễn Hữu Tiến - Tây Thạnh -
                                                    Tân Phú.</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media align-items-center"><span className="info-icon"><i className="icon fas fa-phone" /></span>
                                            <div className="media-body info-details">
                                                <h6 className="info-type">Call Me</h6><span className="info-value"><a href="tel:0357866848">0357866848</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media align-items-center"><span className="info-icon"><i className="icon fas fa-paper-plane" /></span>
                                            <div className="media-body info-details">
                                                <h6 className="info-type">Email Me</h6><span className="info-value"><a href="mailto:nguyenhai15040206@gmail.com">nguyenhai15040206@gmail.com</a></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Contact

