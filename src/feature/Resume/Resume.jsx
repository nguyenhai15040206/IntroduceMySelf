import React from 'react';
import { useHistory } from 'react-router-dom';
import './Resume.css';


function Resume(props) {
    const history = useHistory();
    const backHome = () => {
        history.push('/HomePage');
    }
    return (
        <div id="#my-skill" className="animate__animated animate__slideInLeft animate__delay-0.5s">
            <div className="container-fluid">
                <button onClick={() => { backHome() }} id="back-home" className="btn btn-outline-light">&nbsp;x&nbsp;</button>
            </div>
            <div className="container">
                <div className="header mt-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading page-heading">
                                <p className="section-description">Check out my Resume</p>
                                <h2 className="section-title">Resume</h2>
                                <div className="animated-bar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-skill-know">
                    <div className="row">
                        <div className="col-12">
                            <p>My level of knowledge in some tools</p>
                            <h1>My Skills</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="single-skill" data-percentage={85}>
                                <div className="skill-info"><span className="skill-name">HTML/CSS + Web Design</span><span className="skill-percentage" style={{ marginRight: '28.5px' }}>85%</span></div>
                                <div className="progress skill-progress">
                                    <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={85} style={{ width: '85%' }} />
                                </div>
                            </div>
                            <div className="single-skill" data-percentage={90}>
                                <div className="skill-info"><span className="skill-name">C# (Asp.net MVC, Core, Winform)</span><span className="skill-percentage" style={{ marginRight: '28.5px' }}>90%</span></div>
                                <div className="progress skill-progress">
                                    <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={90} style={{ width: '90%' }} />
                                </div>
                            </div>
                            <div className="single-skill" data-percentage={80}>
                                <div className="skill-info"><span className="skill-name">Android Development</span><span className="skill-percentage" style={{ marginRight: '114px' }}>75%</span></div>
                                <div className="progress skill-progress">
                                    <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={75} style={{ width: '75%' }} />
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-md-6">
                            <div className="single-skill" data-percentage={80}>
                                <div className="skill-info"><span className="skill-name">Java</span><span className="skill-percentage" style={{ marginRight: '114px' }}>80%</span></div>
                                <div className="progress skill-progress">
                                    <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={80} style={{ width: '80%' }} />
                                </div>
                            </div>
                            <div className="single-skill" data-percentage={70}>
                                <div className="skill-info"><span className="skill-name">JavaScript</span><span className="skill-percentage" style={{ marginRight: '114px' }}>70%</span></div>
                                <div className="progress skill-progress">
                                    <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={70} style={{ width: '70%' }} />
                                </div>
                            </div>
                            <div className="single-skill" data-percentage={85}>
                                <div className="skill-info"><span className="skill-name">SQLServer + PostgreSql</span><span className="skill-percentage" style={{ marginRight: '114px' }}>85%</span></div>
                                <div className="progress skill-progress">
                                    <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={85} style={{ width: '85%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resume

