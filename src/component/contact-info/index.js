import "./index.css";

import Heading from "../heading";

import photo from "./photo.svg";

export default function ContactInfo({
  name,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact-info">
      <div className="contact-info__list">
        <img height={80} width={80} src={photo} alt="Photo" />

        <div className="contact-info__block">
          <Heading>Господар - {name}</Heading>
          <div className="contact-info__sub-block">
            <span className="contact-info__sub-value">{phone}</span>

            <span className="contact-info__sub-value">{response_time}</span>

            <span className="contact-info__sub-value">
              {response_rate}% швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact-info__info">{info}</p>
    </div>
  );
}
