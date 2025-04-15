import { FaArrowRight } from "react-icons/fa";
import NavigationComponent from "../components/NavigationComponent";
import HodalImage from "/images/hodalImage.png";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <div>
      <div>
        <NavigationComponent />
      </div>
      <section>
        <div className="heroAreaLeftSide">
          <div>
            <h1>Hello</h1>
            <h2>i’m Muheto Hodal</h2>
            <h3>Web Designer</h3>
            <div>
              <p>
                A personal portfolio is a collection of your work, achievements,
                and skills that highlights your abilities and professional
                growth. It serves as
              </p>
            </div>
            <button>
              view my portfolio <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="heroAreaRightSide">
          <img src={HodalImage} alt="" />
        </div>
      </section>
      <Skills/>
    </div>
  );
}

export default HomePage;
