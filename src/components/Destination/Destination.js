import React, {useState} from "react";
import background from "../background/background";
import data from "../../data/data.json";

export function Destination() {
    window.onload = background("destination")

    const [planets] = useState(data.destinations);
    const [value, setValue] = useState(0);
    const {name, images, description, distance, travel} = planets[value];
    return (
        <>
            <section className="destination">
                <div className="destination__container">
                    <article className="destination__block-left">
                        <h2 className="destination__title">
                            <span className="destination__title_weight">01</span>Pick your destination
                        </h2>
                        <img src={ process.env.PUBLIC_URL + images.png} alt={name} title={name} className="destination__images"/>
                    </article>
                    <article className="destination__block-right">
                        <ul className="destination__list">
                            {planets.map((item, index) => (
                                <li key={index} className="destination__item">
                                    <button onClick={() => setValue(index)}
                                            className={`destination__button ${index === value && 'destination__border'}`}>
                                        {item.name}
                                    </button>
                                </li>)
                            )}
                        </ul>
                        <h2 className="destination__heading">{name}</h2>
                        <p className="destination__desc">{description}</p>
                        <ul className="destination__content">
                            <li className="destination__aside">AVG. DISTANCE<span
                                className="destination__aside_numbers">{distance}</span></li>
                            <li className="destination__aside">Est. travel time<span
                                className="destination__aside_numbers">{travel}</span></li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}
