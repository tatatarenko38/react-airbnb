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
        {hasPool && <ListItem imageSrc={pool}> Басейн </ListItem>}
        {hasGym && <ListItem imageSrc={gym}> Cпортивний зал </ListItem>}
        {hasFreeBreakfast && (
          <ListItem imageSrc={freeBreakfast}>Безкоштовний сніданок </ListItem>
        )}
        {hasFreeWiFi && (
          <ListItem imageSrc={freeWiFi}>Безкоштовний Wi-Fi </ListItem>
        )}
        {hasParking && (
          <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
        )}
        {hasPetsAllowed && (
          <ListItem imageSrc={petsAllowed}>
            Дозволено розміщення з домашніми тваринами
          </ListItem>
        )}
        {hasAirportShuttle && (
          <ListItem imageSrc={airportShuttle}>Трансфер до/з аеропорту</ListItem>
        )}
        {hasConciergeService && (
          <ListItem imageSrc={conciergeService}> Консьєрж-сервіс </ListItem>
        )}
        {hasRoomService && (
          <ListItem imageSrc={roomService}> Обслуговування номерів</ListItem>
        )}
        {hasChildFriendly && (
          <ListItem imageSrc={childFriendly}>Підходить для дітей </ListItem>
        )}
      </ul>
    </Box>
  );
}
