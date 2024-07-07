import "./index.css";

import Box from "../box";

import Heading from "../heading";

import ListItem from "../list-item";

import Icon from "../icon";

import pool from "./pool.svg";
import gym from "./gym.svg";
import freeBreakfast from "./freeBreakfast.svg";
import freeWiFi from "./freeWyFy.svg";
import parking from "./parking.svg";
import petsAllowed from "./petsAllowed.svg";
import airportShuttle from "./airportShuttle.svg";
import conciergeService from "./conciergeService.svg";
import roomService from "./roomService.svg";
import childFriendly from "./childFrriendly.svg";

import { Fragment } from "react";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>

      <ul className="amenities__list">
        <ListItem>
          {hasPool && (
            <Fragment>
              <Icon src={pool} />
              <span>Басейн</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasGym && (
            <Fragment>
              <Icon src={gym} />
              <span>Cпортивний зал</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasFreeBreakfast && (
            <Fragment>
              <Icon src={freeBreakfast} />
              <span>Безкоштовний сніданок</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasFreeWiFi && (
            <Fragment>
              <Icon src={freeWiFi} />
              <span>Безкоштовний Wi-Fi</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasParking && (
            <Fragment>
              <Icon src={parking} />
              <span>Безкоштовний вуличний паркінг</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasPetsAllowed && (
            <Fragment>
              <Icon src={petsAllowed} />
              <span>Дозволено розміщення з домашніми тваринами</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasAirportShuttle && (
            <Fragment>
              <Icon src={airportShuttle} />
              <span>Трансфер до/з аеропорту</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasConciergeService && (
            <Fragment>
              <Icon src={conciergeService} />
              <span>Консьєрж-сервіс</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasRoomService && (
            <Fragment>
              <Icon src={roomService} />
              <span>Обслуговування номерів</span>
            </Fragment>
          )}
        </ListItem>

        <ListItem>
          {hasChildFriendly && (
            <Fragment>
              <Icon src={childFriendly} />
              <span>Підходить для дітей</span>
            </Fragment>
          )}
        </ListItem>
      </ul>
    </Box>
  );
}
