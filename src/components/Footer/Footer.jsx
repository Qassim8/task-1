import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";
import FooterCard from "./FooterCard/FooterCard";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import FooterInfo from "./FooterInfo/FooterInfo";
function Footer() {
  const cardItems = [
    {
      icon: <FaLocationDot className="fs-1 mb-4" />,
      text: "14 E 12th St, New York",
    },
    {
      icon: <FaPhoneAlt className="fs-1 mb-4" />,
      text: "+1 299-670-9615",
    },
    {
      icon: <AiFillMessage className="fs-1 mb-4" />,
      text: "Live Chat",
    },
    {
      icon: <BsEnvelopeFill className="fs-1 mb-4" />,
      text: "hi@company.com",
    },
  ];

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row border-bottom pt-3 pb-5 ">
          {cardItems.map(({ icon, text }, index) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
              <FooterCard icon={icon} text={text} />
            </div>
          ))}
        </div>
        <FooterInfo />
      </div>
    </footer>
  );
}

export default Footer;
