import classes from "./style/Aim.module.css";
import { AimList } from "../content/index";
import { sample } from "../assets/assets";
const Aim = () => {
  return (
    <div className={`${classes.aimSectionWraper} flex-between`}>
      <div className={classes.first}>
        <img src={sample} alt="" />
      </div>

      <div className={classes.second}>
        <h1>আমাদের লক্ষ্য-</h1>
        <ul>
          {AimList.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> <span>{item.details}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aim;
