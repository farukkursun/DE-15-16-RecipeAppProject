import "./Footer.css";

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
