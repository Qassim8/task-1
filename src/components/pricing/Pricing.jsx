import "./Pricing.css";
import PricingCard from "./PricingCard/PricingCard";

function Pricing() {
  const pricingPlanInfo = [
    {
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
    },
    {
      title: "Pro",
      price: 4.99,
      limit: "month",
      desc: "Perfect for get started on their nutrition journey",
      featuers: [
        "1 Website",
        "50GB Disk Space",
        "Free Domain Name included*",
        "20 E-Mail Accounts",
        "WordPress Pre-installed",
        "Performance Plugins Pre-installed",
        "Powered by Turbo",
        "30 days money-back guarantee**",
      ],
    },
    {
      title: "Max",
      price: 6.99,
      limit: "month",
      desc: "Perfect for get started on their nutrition journey",
      featuers: [
        "1 Website",
        "100GB Disk Space",
        "Free Domain Name included*",
        "40 E-Mail Accounts",
        "WordPress Pre-installed",
        "Performance Plugins Pre-installed",
        "Powered by Turbo",
        "30 days money-back guarantee**",
      ],
    },
  ];
  return (
    <>
      <section className="pricing-title">
        <h1>Pricing</h1>
      </section>
      <section className="py-5">
        <div className="pricing-plan-title text-center my-3">
          <h2>Choose the right hosting plan for you</h2>
          <p>
            Each of our web hosting solutions are fine-tuned, blazing fast and
            are ready for you! Choose the high speed package tailored for your
            needs
          </p>
        </div>
        <div className="container">
          <div className="row pricing-plan-grid">
            {pricingPlanInfo.map((el, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                <PricingCard data={el} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
