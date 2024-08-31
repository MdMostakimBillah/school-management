// import clases from "../style/Home.module.css";
import Navigation from "../Navigation";
import Aim from "../Aim";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="container_page">
        <Aim />
      </div>
    </>
  );
};

export default Home;
