import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <Link href="/">
                    <Image src="/img/AakashBadole-logo.png" alt="Akash Badole Portfolio"  width={100} height={61} />
                  </Link>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer_social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer_bottom justify-content-center">
            <p className="col-lg-8 col-sm-12 footer-text">
              Copyright &copy;
              {new Date().getFullYear()  } All
              rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
