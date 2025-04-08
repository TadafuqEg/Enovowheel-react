import img10 from "../../puplic/assets/img20.png";
import img4 from '../../puplic/assets/Arrow-mail.png'
import img6 from '../../puplic/assets/img31.png'
import img8 from '../../puplic/assets/img12.png'

import img9 from "../../puplic/assets/acc1.png";

import img11 from "../../puplic/assets/acc2.png";
import img12 from "../../puplic/assets/acc3.png";
import img13 from "../../puplic/assets/acc4.png";
import img14 from "../../puplic/assets/acc5.png";
import img15 from "../../puplic/assets/acc6.png";
import img16 from "../../puplic/assets/acc7.png";
import img17 from "../../puplic/assets/acc8.png";
import img18 from "../../puplic/assets/acc9.png";
import img19 from "../../puplic/assets/acc10.png";
import Footer from "../components/Footer"


const Accessories = () => {
    return (
        <div className='accessories'>
            <div className="access-sec-1">
                <img className="access-img" src={img10} />
                <div className="access-sec1-content">
                    <h5>Accessories</h5>
                    <p>By using accessories, you can build a scooter according to the use that suits you.</p>
                    {/* <div className="">
                        <button className="xx"><img src={img9} /> ORDER NOW</button>
                    </div> */}
                </div>
            </div>
            {/* sec-4 */}
            <div className='sec-4'>
                <div className='sec3-top'>
                    {/* <div>
                        <h5>Accessories</h5>
                        <p>By using accessories, you can build a scooter according to the use<br /> that suits you.</p>
                    </div> */}
                    <p className="sort-by">Sort By:<span> Best selling</span><img src={img4} /></p>
                </div>
                <div className='sec4-bottom'>

                    <div className='card-1'>
                        <img className='card-img acc-radius' src={img9} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Tow connection - (Attaches to a Primary connection or Seat Holder)</h5>
                                <p className='price'>$70.00</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img acc-radius' src={img11} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Sport Seat (Attaches to Seat holder set)</h5>
                                <p className='price'>$52.50</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img12} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Seat Holder + Primary connection</h5>
                                <p className='price'>$210</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img13} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Primary connection</h5>
                                <p className='price'>$210</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img14} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Off Road Tire</h5>
                                <p className='price'>$59.00</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img15} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Golf Bag Holder (Attaches to Seat holder set or a Primary connection)</h5>
                                <p className='price'>$360.00</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img16} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Full Seat (Attaches to Seat holder set)</h5>
                                <p className='price'>$157,50</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img17} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Box Holder + Primary connection</h5>
                                <p className='price'>$287.00</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img18} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Back Rack (Attaches to Seat holder set)</h5>
                                <p className='price'>$217,00</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img19} />
                        <div className='bottom-flex'>
                            <div className='flex-left-2'>
                                <h5>Great Outdoor Rack (Attaches to Seat holder set or a Primary connection)</h5>
                                <p className='price'>$360,00</p>
                            </div>
                            <div className='flex-right-2'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* sec-7 */}
            <div className="sec-7">
                <img className='zoom-out' src={img8} />
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

export default Accessories;