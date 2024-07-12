import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    const highlightText = {
        fontSize: "13px",
        fontWeight: "600"
    }
    const formBorder = {
        border: "1px solid blue",
        padding: "20px"
    }
  return (
    <>
    <section className="contact_area section_gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <FaHome />
                            <p style={highlightText}>Gopal Nagar, Nagpur</p>
                            <p>440022, Maharashtra Nagpur</p>
                        </div>
                        <div className="info_item">
                            <FaPhone />
                            <p style={highlightText}>Connect on Gmail</p>
                            
                        </div>
                        <div className="info_item">
                            <FaEnvelope />
                            <p style={highlightText}>badole akash @ gmail .com</p>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9" style={formBorder}>
                    <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" >
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="primary_btn">
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
