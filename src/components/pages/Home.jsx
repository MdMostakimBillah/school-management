// import clases from "../style/Home.module.css";
import Navigation from "../Navigation";
import Facilities from "../Facilities";
import Aim from "../Aim";
import GoodResultStudents from "../GoodResultStudents";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="container_page">
        <Aim />
        <Facilities />
        <GoodResultStudents />
      </div>
    </>
  );
};

export default Home;
