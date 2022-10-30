import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.info.img} alt="location" className="card__image" />
            <div className="card__details">
                <p className="card__country">{props.info.country}<a href={props.info.link} className="card__link">View on Google Maps</a></p>
                <h1 className="card__location">{props.info.location}</h1>
                <p className="card__date">{props.info.date}</p>
                <p className="card__desc">{props.info.desc}</p>
            </div>
        </div>
    )
}