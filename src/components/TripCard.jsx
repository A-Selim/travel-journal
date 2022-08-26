import React from "react";
import pinIcon from "../assets/pin-icon.png";

export default function TripCard(props) {
  return (
    <div className="trip-card">
      <div className="trip-img">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="trip-details">
        <div className="card-location">
          <img src={pinIcon} alt="" className="pin-icon" />
          <span className="location">{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank" className="map-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-duration">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
