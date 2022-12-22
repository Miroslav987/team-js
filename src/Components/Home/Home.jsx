import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
function Home() {
  return (
    <>
      <Carousel fade className="home_block_slide" variant="dark">
        <Carousel.Item>
          <div className="home_slide  w-100"></div>
          <Carousel.Caption>
            <h2>Editor's Choice</h2>
            <p>
              Download our mobile app and read books
              <br /> anytime , anywhere
            </p>
            <button>Show More </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_slide  w-100"></div>
          <Carousel.Caption>
            <h2>Second slide label</h2>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_slide  w-100"></div>

          <Carousel.Caption>
            <h2>Third slide label</h2>
            <p>
              Praesent commodo cursus magna,
              <br /> vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
