import { Link } from "react-router-dom"

function Hero () {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Let us find your <strong>Forever Food.</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="hero-btn">
                    <Link to="/" id = "hero-search-btn">Search now</Link>
                    <Link to="/">Know more</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero