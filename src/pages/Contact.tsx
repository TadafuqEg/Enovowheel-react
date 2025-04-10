import img7 from "../../puplic/assets/Vector.png";
import img11 from "../../puplic/assets/img24.png";
import img9 from "../../puplic/assets/img23.png";
import img10 from "../../puplic/assets/circle.png";
import img8 from '../../puplic/assets/img12.png'
import Form from "../components/form"
import img4 from '../../puplic/assets/arrow-2.png'
import Tabs from "../components/Tabs"
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <div className='contact'>

      {/* <div className="contact-sec-1">
        <img className="contact-img1" src={img11} />
        <img className="contact-img2" src={img9} />
        <div className="contact-wheel">
          <img className="contact-wheel-img" src={img10} />
          <h5>Four-Wheel Drive</h5>
          <p>Optimize your trip time</p>
          <a href='/shopping'><button><img src={img7} />Order Now</button></a>
        </div>
      </div> */}

      <div className="contact-form">
        <Form />
      </div>


      {/* sec-6 */}
      {/* <div className="sec-6">
        <div className='sec3-top'>
          <div>
            <h5>Build Your Scooters</h5>
            <p>By using accessories, you can build a scooter according to the use <br /> that suits you</p>
          </div>
          <a href='/shopping'><button className='btn-3'><img src={img4} />explore more</button></a>
        </div>
        <div>
          <Tabs />
        </div>
      </div> */}

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

export default Contact;