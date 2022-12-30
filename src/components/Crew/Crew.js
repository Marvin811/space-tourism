import React, {useState} from "react";
import background from "../background/background";
import data from '../../data/data.json';

export function Crew() {
    window.onload = background('crew')

    const [crew] = useState(data.crew);
    const [value, setValue] = useState(0);
    const {name, images, role, bio} = crew[value];
    return (
        <>
            <section className="crew">
                <div className="crew__container">
                    <article className="crew__block-left">
                        <h2 className="crew__title">
                            <span className="crew__title_weight">02</span>Meet your crew
                        </h2>
                        <h4 className="crew__role">{role}</h4>
                        <h3 className="crew__heading">{name}</h3>
                        <p className="crew__text-bio">{bio}</p>
                        <ul className="crew__list">
                            {crew.map((item, index) => (
                                <li key={index} className="crew__item">
                                    <button onClick={() => setValue(index)} className={`crew__button ${index === value && "crew__button_active"}`}></button>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="crew__block-right">
                        <img src={images.png} alt={name} title={name} className="crew__image"/>
                    </article>
                </div>
            </section>
        </>
    )
}
