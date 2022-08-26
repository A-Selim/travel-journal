import React from "react";
import data from "../data";
import TripCard from "./TripCard";

export default function MainContent() {
  const cards = data.map((item) => <TripCard key={item.id} {...item} />);

  return <main className="container">{cards}</main>;
}
