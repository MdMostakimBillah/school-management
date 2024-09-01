// import clases from "../style/Home.module.css";
import Navigation from "../Navigation";
import Facilities from "../Facilities";
import Aim from "../Aim";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="container_page">
        <Aim />
        <Facilities />
      </div>
    </>
  );
};

export default Home;
