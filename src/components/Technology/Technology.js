import React, {useState} from "react";
import background from "../background/background";
import data from '../../data/data.json';

export function Technology() {
    window.onload = background('technology');

    const [technology] = useState(data.technology);
    const [value, setValue] = useState(0);
    const {name, images, description } = technology[value];

    return (
        <>
            <section className="technology">
            <div className="technology__container">
                <article className="technology__block-left">
                    <h2 className="technology__title">
                        <span className="technology__title_weight">03</span>SPACE LAUNCH 101
                    </h2>
                    <div className="technology__block">
                            <ul className="technology__list">
                                {technology.map((item, index) => (
                                    <li key={index} className="technology__item">
                                        <button className={`technology__button ${index === value && "technology__button_active"}`}
                                                onClick={() => setValue(index)}>{index + 1}</button>
                                    </li>
                                ))}
                            </ul>

                            <div className="technology__content">
                                <h5 className="technology__content-text">THE TERMINOLOGY…</h5>
                                <h3 className="technology__content-title">{name}</h3>
                                <p className="technology__description">{description}</p>
                            </div>
                    </div>

                </article>
                <article className="technology__block-right">
                    <img src={process.env.PUBLIC_URL + images.portrait} alt={name} title={name} className="technology__images"/>
                    <img src={process.env.PUBLIC_URL + images.landscape} alt={name} title={name} className="technology__images_landscape"/>
                </article>
            </div>
            </section>
        </>
    )
}
