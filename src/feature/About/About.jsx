import React from 'react';
import '../About/About.css';
import myPhoto from '../../assets/Images/MyPhotos/MyPhotos.jpg';
import CSharp from '../../assets/Images/technologys/c-sharp-logo-2-removebg-preview.png';
import { useHistory } from 'react-router-dom';

function About(props) {
    const history = useHistory();
    const backHome = () => {
        history.push('/HomePage');
    }
    return (
        <div className="animate__animated animate__slideInUp animate__delay-0.5s">
            <div className="container-fluid">
                <div className="back-home">
                    <button onClick={() => { backHome() }} className="btn btn-outline-light">&nbsp;x&nbsp;</button>
                </div>
            </div>
            <div className="container">
                <div className="header mt-2">
                    <div className="row">
                        <div className="col-12">
                            <p>Get to know me</p>
                            <span>About Me</span>
                        </div>
                        <div className="animated-bar">
                        </div>
                    </div>
                </div>
                <div className="about-me">
                    <div className="row align-item-center">
                        <div className="col-12 col-lg-5 info-img ">
                            <img className="img-avatar" src={myPhoto} alt="myPhoto" />
                        </div>
                        <div className="col-12 col-lg-7 info-content">
                            {/*KHối nội dung*/}
                            <div className="content-block">
                                {/*pHỤ ĐÊ NỘI DUNG*/}
                                <div className="content-subtitle"><strong>Xin chào!</strong>Cảm ơn bạn đã ghé thăm trang cá nhân của
                                    tôi!</div>
                                <div className="content-title">Giới thiệu về bản thân...
                                </div>
                                <div className="content-description">
                                    - Tên tôi là Nguyễn Tấn Hải. Tôi là một Web Developer xây dựng các trang web và thiết kế các
                                    giao diện người dùng, tuân thủ các xu hướng thiết kế mới nhất. Ngoài ra, tôi có thể xây dựng
                                    các ứng dụng Desktop, lập trình di động,... <br />
                                    - Công việc hiện tại: Sinh viên năm cuối khoa Công Nghệ Thông Tin trường Đại học Công Nghiệp
                                    Thực Phẩm TP.HCM. <br />
                                    - Sở thích: Đá bóng, xem phim, nghe nhạc, du lịch thực tế,...
                                </div>
                                <hr />
                                <div className="content-info">
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-5 single-info">
                                            <span>Name: Nguyễn Tấn Hải
                                            </span>
                                        </div>
                                        <div className="col-12 col-md-7 single-info"><span>Email: <a href="mailto:nguyenhai15040206@gmail.com">nguyenhai15040206@gmail.com</a></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-5 single-info">
                                            <span>Age: 21</span>
                                        </div>
                                        <div className="col-12 col-md-7 single-info"><span>From: Nghĩa Phương - Tư Nghĩa - Quãng
                                            Ngãi</span></div>
                                    </div>
                                </div>
                            </div>
                            {/*Kết thúc khối nội dung*/}
                            <div className="mt-2 content-contact">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <button className="btn btn-primary">Download CV</button>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="row">
                                            <div className="col-2">
                                                <hr />
                                            </div>
                                            <div className="col-10">
                                                <div className="row">
                                                    <div className="col">
                                                        <ul className="list-unstyled list-inline content-follow">
                                                            <li className="list-inline-item"><a href="https://www.facebook.com/tanhai.nguyen.921/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square" /></a>
                                                            </li>
                                                            <li className="list-inline-item"><a href="https://github.com/nguyenhai15040206" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technologies">
                    <div className="row title">
                        <div className="col-12">
                            <h2>Công nghệ yêu thích của tôi...</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-service"><i className="service-icon fab fa-react" />
                                <h6 className="service-title">ReactJS</h6>
                                <p className="service-description">Xây dựng các giao diện người dùng (UI) + các framework đi kèm.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-service"><img className="service-icon" src={CSharp} style={{ width: '58px', height: '58px' }} alt="logo" />
                                <h6 className="service-title">CSharp</h6>
                                <p className="service-description">Xây dựng website (Asp.Net MVC), web Api (Asp.Net Core) và các ứng
                                    dụng desktop (C# winform).</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-service"><i className="service-icon fab fa-android" />
                                <h6 className="service-title">Android Developer</h6>
                                <p className="service-description">Xây dựng các ứng dụng di động với các chức năng tương thích.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-service"><i className="service-icon fab fa-java" />
                                <h6 className="service-title">Java</h6>
                                <p className="service-description">Xây dựng cái ứng dụng desktop bằng java-swing.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-service"><i className="service-icon fas fa-database" />
                                <h6 className="service-title">SQL Server và PostgreSql</h6>
                                <p className="service-description">Sử dụng hai hệ quản trị cơ sở dữ liệu để lưu trữ và trao đổi dữ liệu.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-service">
                                <i className="service-icon fab fa-html5" />&nbsp;
                                <i className="service-icon fab fa-css3" />&nbsp;
                                <i className="service-icon fab fa-js-square" />
                                <h6 className="service-title">Html + Css + JavaScript</h6>
                                <p className="service-description">Xây dụng các trang web bằng html + css + javascript và sử dụng các thư viện đi kèm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About

