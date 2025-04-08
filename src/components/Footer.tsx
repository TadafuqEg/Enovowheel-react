import img1 from "../../puplic/assets/logo.png"


const Footer = () => {
  return (
    <div>
      <div className='footer flex'>
        <div className='footer-img'>
          <img src={img1} />
          <p>new mobility experience takes urban and off road riding to the next level.</p>
        </div>
        <div className='footer-information flex'>
          <div className='Menu'>
            <h5>Menu</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="enovowheel/Products/4*4">Product</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a>Dealers</a></li>
              <li><a>Blog</a></li>
            </ul>
          </div>
          <div className='Menu'>
            <h5>Menu</h5>
            <ul>
              <li><a>Login</a></li>
              <li><a>Register</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>
          <div className='Community'>
            <h5>Community</h5>
            <ul>
              <li><a>Instagram</a></li>
              <li><a>Twitter</a></li>
              <li><a>SnapChat</a></li>
              <li><a>Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom flex justify-between'>
        <div className='footer-social'>
          <p>© 2024 Enovowheel Copyright</p>
        </div>
        <div className='footer-copy flex justify-between'>
          <a>Privacy Policy</a>
          <a>Terms of Use</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;