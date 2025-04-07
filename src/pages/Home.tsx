import { motion } from 'framer-motion';
import img1 from '../../puplic/assets/img1.png'
import img2 from '../../puplic/assets/img2.png'
import img3 from '../../puplic/assets/Vector.png'
import img4 from '../../puplic/assets/arrow-2.png'
import video from '../../puplic/assets/Adam movie 2.mp4'
import img5 from '../../puplic/assets/img4.png'
import img6 from '../../puplic/assets/img8.png'
import img7 from '../../puplic/assets/img14.png'
import img8 from '../../puplic/assets/img12.png'
import Cursor from "../components/owlCurosel"
import Tabs from "../components/Tabs"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <div className="home min-h-screen relative overflow-hidden">
      {/* sec-1 */}
      <div className="sec-1">
        {/* <Navbar /> */}
        <div className="sec1-content" style={{}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="novo-home"
          >
            <p>introducing a new</p>
            <img src={img2} className='bac-1' />
            <p className='p-2'>that takes urban and off road riding to the next level.</p>
            <div className='buttons'>
              <a><button className='btn-1'><img src={img3} />Order Now</button></a>
              <a><button className='btn-2'>Become a Dealer</button></a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="novo-img"
          >
            <img src={img1} className='nn' />
          </motion.div>
        </div>
      </div>
      {/* sec-2 */}
      <div className='sec-2'>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* sec-3 */}
      <div className='sec-3'>
        <div className='sec3-top'>
          <h5>Revolution Stable and Safety <br /> Mobility</h5>
          <a><button className='btn-3'><img src={img4} />explore more</button></a>
        </div>
        <Cursor />
      </div>

      {/* sec-4 */}
      <div className='sec-4'>
        <div className='sec3-top'>
          <div>
            <h5>Our Products</h5>
            <p>Lorem ipsum dolor sit amet consectetur. Massa elit tortor ornare diam vel .</p>
          </div>
          <a><button className='btn-3'><img src={img4} />explore more</button></a>
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

        </div>
      </div>

      {/* sec-5 */}
      <div className="sec-5">
        <img src={img7} />
      </div>

      {/* sec-6 */}
      <div className="sec-6">
        <div className='sec3-top'>
          <div>
            <h5>Build Your Scooters</h5>
            <p>By using accessories, you can build a scooter according to the use <br /> that suits you</p>
          </div>
          <a><button className='btn-3'><img src={img4} />explore more</button></a>
        </div>
        <div>
          <Tabs />
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

export default Home;