import { motion } from 'framer-motion';
import img1 from "../../puplic/assets/circle.png"
import img2 from "../../puplic/assets/speed.png"
import img3 from '../../puplic/assets/Vector.png'
import img7 from '../../puplic/assets/img14.png'
import img8 from '../../puplic/assets/img12.png'
import EnovoX4 from "../components/enovowheelX4"
import Footer from "../components/Footer"

const ProductTwo = () => {
    return (
        <div className='product-four'>
            <div className='four-wheel'>
                <div className='four-wheel-content'>
                    <div className="content-left">
                    </div>
                    <div className="content-right">
                    </div>

                </div>
                <div className='four-wheel-details'>
                    <div className="speed-acceleration">
                        <div className="top-speed">
                            <div className="top-speed-left flex">
                                <img src={img2} />
                                <span>Top Speed</span>
                            </div>
                            <div className="top-speed-right">
                                <span>48mph</span>
                                <ul>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="acceleration">
                            <div className="top-speed-left">
                                <img src={img2} />
                                <span>Acceleration</span>
                            </div>
                            <div className="top-speed-right">
                                <span>48mph</span>
                                <ul>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="speed-acceleration">
                        <div className="top-speed">
                            <div className="top-speed-left">
                                <img src={img2} />
                                <span>Top Speed</span>
                            </div>
                            <div className="top-speed-right">
                                <span>48mph</span>
                                <ul>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="acceleration">
                            <div className="top-speed-left">
                                <img src={img2} />
                                <span>Acceleration</span>
                            </div>
                            <div className="top-speed-right">
                                <span>48mph</span>
                                <ul>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="order-now">
                        <div className='buttons'>
                            <a href='/shopping'><button className='btn-1'><img className='im' src={img3} />Order Now</button></a>
                        </div>
                    </div>

                </div>
                <div className="content-text">
                    <h5>Two-Wheel <br /> Drive</h5>
                    <p>Optimize your trip time</p>
                    <div className="circles">
                        <img src={img1} />
                        <img src={img1} />
                    </div>
                </div>
            </div>

            {/* sec-2 */}
            <div className="s">
                <EnovoX4 />
            </div>


            {/* sec-5 */}
            <div className="sec-5">
                <img src={img7} />
            </div>

            {/* sec-7 */}
            <div className="sec-7">
                <img src={img8} />
            </div>

            {/* sec-8 */}
            <div className="sec-8">
                <div className='footer'>
                    <Footer />
                </div>
            </div>



        </div>
    );
};

export default ProductTwo;