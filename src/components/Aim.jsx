import classes from "./style/Aim.module.css";
import { sample, myPlan } from "../assets/assets";
import { AimList } from "../content/index";
const Aim = () => {
  return (
    <div className={classes.aimSectionWraper}>
      <div className={classes.first}>
        <img src={myPlan} alt="" />
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
