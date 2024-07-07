import "./index.css";

export default function Icon({ src, name }) {
  return <img src={src} alt={name} className="icon" />;
}
