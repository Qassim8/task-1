import { FaCheck } from "react-icons/fa";
import "./PricingCard.css";

function PricingCard({ data }) {
  return (
    <div className="card pricing-card">
      <div className="card-body">
        <h2 className="card-title fw-bold fs-4">{data.title}</h2>
        <h3 className="price-plan fs-1">
          ${data.price}
          <span className="limit flex-end">/{data.limit}</span>
        </h3>
        <div className="card-text" style={{ fontSize: "18px" }}>
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
