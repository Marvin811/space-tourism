import React, {useState} from "react";
import background from "../background/background";
import data from "../../data/data.json";
import './Destination.css';

export function Destination() {
    window.onload = background("destination")

    const [planets] = useState(data.destinations);
    const [value, setValue] = useState(0);
    const {name, images} = planets[value];
    return (
        <>
            <section className="destination">
                <div className="destination__container">
                    <article className="destination__block-left">
                        <h2 className="destination__title">
                            <span className="destination__title_weight">01</span>Pick your destination
                        </h2>
                        <img src={images.webp} alt={name} title={name} className="destination__images"/>
                    </article>
                </div>
            </section>
        </>
    )
}
