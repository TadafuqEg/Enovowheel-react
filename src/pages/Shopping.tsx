import { motion } from 'framer-motion';
import img1 from "../../puplic/assets/circle.png"
import img2 from "../../puplic/assets/speed.png"
import img3 from '../../puplic/assets/Vector.png'
import img7 from '../../puplic/assets/img14.png'
import img8 from '../../puplic/assets/img12.png'
import EnovoX4 from "../components/enovowheelX4"
import Footer from "../components/Footer"

import ProductPage from "../components/ProductPage"

const ProductFour = () => {
    return (
        <div className='shopping'>
            <div className='four-wheel'>
                <div className='four-wheel-content'>
                    <div className="content-left">
                    </div>
                    <div className="content-right">
                    </div>

                </div>
                <div className="content-text">
                    <h5>Shop</h5>
                    <p className='shop-p'>You are eligible for free shipping.</p>
                    <div className="circles">
                        <img src={img1} />
                        <img src={img1} />
                    </div>
                </div>
            </div>


            <div className="product-page">
                <ProductPage />
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

export default ProductFour;