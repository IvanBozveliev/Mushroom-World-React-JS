import './Footer.css'
import { ExternalLink } from 'react-external-link';

const Footer = () => {
    return (
        <footer>
            <div className="footer ">
                <div className="container-footer">
                    <div className="row">
                        {/* <div className="col-md-12">
                            <a href="#" className="logo_footer"> <img src="images/logo2.png" alt="#" /></a>
                        </div> */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                                    <div className="address">
                                        <h3>Address </h3>
                                        <ul className="loca">
                                            <li>
                                                <a href="#"></a>It is a long established fact
                                                <br />that a reader will be  </li>
                                            <li>
                                                <a href="#"></a>(+71 1234567890) </li>
                                            <li>
                                                <a href="#"></a>demo@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="address">
                                        <h3>Social Link</h3>
                                        <ul className="Menu_footer">
                                            <li> <ExternalLink href="https://www.twitter.com/">Twitter</ExternalLink> </li>
                                            <li><ExternalLink href="https://www.facebook.com/">Facebook</ExternalLink> </li>
                                            <li><ExternalLink href="https://www.instagram.com/">Instagram</ExternalLink> </li>
                                            <li><ExternalLink href="https://www.linkedin.com">Linkdin</ExternalLink> </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 col-sm-6 ">
                                    <div className="address">
                                        <h3>Newsletter</h3>
                                        <form className="news">
                                            <input className="newslatter" placeholder="Enter your email" type="text" name=" Enter your email" />
                                            <button className ="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="copyright">
                    <div className="container-footer">
                        <p>Copyright © 2019 Design by <ExternalLink href="https://html.design/">Free Html Templates </ExternalLink></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;