import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function GuestReviewsList({ list }) {
  return (
    <div className="guestReviews__block">
      {/*<Heading border> - знизу з'являється лінія */}
      <Heading>Типи номерів</Heading>

      <div className="guestReviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guest">
      <div className="guest__header">
        <span className="guest__title">{guestName}</span>
        <span className="guest__rating">Рейтинг: {rating}</span>
      </div>

      <span className="guest__review">{review}</span>
    </Box>
  );
}
