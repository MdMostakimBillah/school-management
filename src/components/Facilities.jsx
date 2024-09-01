import classes from "../components/style/Facilities.module.css";
import Aim_classes from "./style/Aim.module.css";
import { facilities } from "../content/index";
import { sample } from "../assets/assets";
const Facilities = () => {
  return (
    <div className={`${classes.facilitiesWraper} flex-between`}>
      <div className={Aim_classes.second}>
        <h1>সুযোগ-সুবিধা সমূহ-</h1>
        <ul>
          {facilities.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> <span>{item.details}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={Aim_classes.first}>
        <img src={sample} alt="" />
      </div>
    </div>
  );
};

export default Facilities;
