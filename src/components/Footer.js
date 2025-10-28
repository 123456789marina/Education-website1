 import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">

          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="social">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>iOS &amp; Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
