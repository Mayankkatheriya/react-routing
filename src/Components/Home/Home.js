import './Home.css';
import Hero from './Hero';
import Summary from './Summary';
import Testimonials from './Testimonials';

function Home () {
  window.scroll(0,0);
    return (
        <main className="home">
            <Hero />
            <Summary />
            <Testimonials />
        </main>
    )
}

export default Home;
