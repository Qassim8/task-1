import "./FooterCard.css";

function FooterCard({ icon, text }) {
  return (
    <div className="text-center">
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default FooterCard;
