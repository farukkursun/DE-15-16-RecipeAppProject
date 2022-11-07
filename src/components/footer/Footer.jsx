import "./Footer.css";
import designSvg from '../../assets/design.svg'
const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/farukkursun"
        target="blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
       <i className="brand"> {"<Faruk>"} </i>
      </a>
      
      <span> Copyright {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
