import { FaCheck } from "react-icons/fa";
import "./PricingCard.css";

function PricingCard({ data }) {
  let el = {
    title: "Starter",
    price: 2.99,
    limit: "month",
    desc: "For a 1-year term. Pay $35.88 today, then $107.88 on renewal",
    featuers: [
      "1 Website",
      "30GB Disk Space",
      "Free Domain Name included*",
      "10 E-Mail Accounts",
      "WordPress Pre-installed",
      "Performance Plugins Pre-installed",
      "Powered by Turbo",
      "30 days money-back guarantee**",
    ],
  };
  return (
    <div className="card pricing-card">
      <div className="card-body">
        <h2 className="card-title fw-bold fs-4">{data.title}</h2>
        <h3 className="price-plan fs-1">
          ${data.price}
          <span className="limit flex-end">/{data.limit}</span>
        </h3>
        <div className="card-text" style={{ fontSize: "17px" }}>
          {data.desc}
        </div>
        <button className="btn card-btn">BUY NOW</button>
        <div className="pricing-features d-flex flex-column gap-3 mt-3">
          {data?.featuers.map((feat, index) => (
            <div className="d-flex align-items-center gap-2" key={index}>
              <FaCheck />
              <span className="flex-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
