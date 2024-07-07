import "./index.css";
import photo from "./photo.svg";
export default function Photo({ src, name }) {
  return <img src={photo} alt={name} className="photo" />;
}
