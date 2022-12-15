import "./Home.css";
export function Home() {
    return (
        <section className="home">
            <div className="home__container">
                <h5 className="home__text">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="home__title">SPACE</h1>
                <p className="home__desc">Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer
                    space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
                    truly
                    out of this world experience!</p>
            </div>
            <a className="home__link" href="#">EXPLORE</a>
        </section>
    )
}
