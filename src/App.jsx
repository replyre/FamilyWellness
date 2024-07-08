import logo from "./logo.svg";
import "./App.css";
import Carousal from "./components/carousal";

function App() {
  return (
    <div>
      <header>
        <div className="title">Family Wellness</div>
        <p className="heading">MASSAGE Therapy</p>
        <nav>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>FAQ</p>
          <p>Contact</p>
        </nav>
      </header>
      <section className="carousal">
        <Carousal name={"carousal1"} prev={false} next={true} slide={1} />
        <Carousal name={"carousal2"} prev={true} next={true} slide={2} />
        <Carousal name={"carousal3"} prev={true} next={false} slide={3} />
      </section>
      <section className="banner">
        <h1>Think Health. Think Massage.</h1>
        <p>
          We are open to 6am to 9pm;Monday to Sunday. If you would like to
          schedule an appointment with us, please call 987-654-3210 today!
        </p>
        <div className="buttons">
          <button>Learn more about us</button>
          <button>Contact us today</button>
        </div>
      </section>
      <section className="text">
        <p>
          Are you looking for a professional massage registered massage
          therapist? Sample Massage Therapy has 4 registered massage therapists
          who can provide clinical massage.
        </p>
        <p>
          We are committed to your long term health and well-being. Our
          multi-disciplinary clinic provides a balanced approach to a healthy
          lifestyle. Enhance your health and improve your performance with our
          treatments.
        </p>
        <p>
          We welcome you to come explore all the benefits you'll enjoy as one of
          our valued guests. Our professional staff is committed to offering the
          best massage therapy in Mainland.
        </p>
      </section>
      <hr color="grey" />
      <section className="address">
        <p>Family Wellness Massage Therapy</p>
        <p>9876 Main Street 123, Mainland, ML12345 </p>
        <p>Phone: 987.654.3210</p>
      </section>
      <footer>Copyright 2024. Website.com. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
