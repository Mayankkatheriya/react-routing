import './Home.css';
import Hero from './Hero';
import Summary from './Summary';
import Testimonials from './Testimonials';

function Home () {
    return (
        <main className="home">
            <Hero />
            <Summary />
            <Testimonials />
        </main>
    )
}

export default Home;
