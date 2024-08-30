import clases from "../style/Home.module.css";
import Navigation from "../Navigation";
const Home = () => {
  return (
    <div className={clases.container_page}>
      <Navigation />
    </div>
  );
};

export default Home;
