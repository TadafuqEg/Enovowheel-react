import img1 from '../../puplic/assets/Empty cart.png'
import img4 from '../../puplic/assets/arrow-2.png'
import img5 from '../../puplic/assets/img4.png'
import img6 from '../../puplic/assets/img29.png'
import Footer from "../components/Footer"


const Cart = () => {
    return (
        <div className="cart">
            {/* cart sec-1 */}
            <div className="cart-sec1">
                <img src={img1} />
                <div className='cart-sec1-content'>
                    <h5>Your shopping cart<br /> looks empty</h5>
                    <p>what are you waiting for?</p>
                </div>
            </div>
            {/* sec-4 */}
            <div className='sec-4'>
                <div className='sec3-top'>
                    <div>
                        <h5>Items you previously viewed</h5>
                        
                    </div>
                </div>
                <div className='sec4-bottom'>
                    {/* <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

            <div className='sec-4 bot-cards'>
                {/* <div className='sec3-top'>
                    <div>
                        <h5>Bestsellers for you</h5>
                        
                    </div>
                </div>
                <div className='sec4-bottom'>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img className='card-img' src={img5} />
                        <div className='bottom-flex'>
                            <div className='flex-left'>
                                <h5>Product Name</h5>
                                <p className='home-price'>$8,639</p>
                            </div>
                            <div className='flex-right'>
                                <img src={img6} />
                            </div>
                        </div>
                    </div>

                </div> */}
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

export default Cart;