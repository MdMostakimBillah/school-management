// import clases from "../style/Home.module.css";
import Navigation from "../Navigation";
import Facilities from "../Facilities";
import Aim from "../Aim";
import GoodResultStudents from "../GoodResultStudents";
import Hero from "../Hero";
import HeadTeacherVoice from "../HeadTeacherVoice";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="container_page">
        <Hero />
        <Aim />
        <Facilities />
        <GoodResultStudents />
        <HeadTeacherVoice />
      </div>
    </>
  );
};

export default Home;
