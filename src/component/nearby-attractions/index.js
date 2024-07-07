import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";
import ListItem from "../list-item";

export default function AttractionsList({ list }) {
  return (
    <Box shadow className="attractions__block">
      {/*<Heading border> - знизу з'являється лінія */}
      <Heading>Пам'ятки поблизу</Heading>

      <div className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul>
      <ListItem>
        <a href={link} className="attractions__item">
          {name}
        </a>
      </ListItem>
    </ul>
  );
}
