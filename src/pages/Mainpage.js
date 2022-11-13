import Navbar from "../components/navbar/Navbar";
import Marquee from '../components/marquee/Marquee';
import Carousel from '../components/Carousel/Carousel';
import CardList from '../components/Card/cardList';
import ListCard from '../components/Listcard/ListCard';
import Footer from '../components/Footer/Footer';
import Popular from '../components/Popular/Popular';

function Mainpage() {
  return (
    <>
      <Navbar />
      <Marquee />
      <section className="template mainpage">
        <div className="round-section">
          <div className="mainpage-carousel">
            <Carousel />
          </div>
          <CardList />
        </div>
        <div className="round-section">
          <ListCard />
          <ListCard />
        </div>
        <div className="round-section">
          <Popular />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Mainpage;
