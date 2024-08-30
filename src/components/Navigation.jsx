import classes from "./style/Navigation.module.css";
import { MidleNavList, RightNav } from "../content/index";
import { mainLogo } from "../assets/assets";
const Navigation = () => {
  return (
    <>
      <nav className="">
        <div className={`container_page flex-between`}>
          {/* logo  */}
          <div className={classes.logo}>
            <a href="#">
              <img src={mainLogo} alt="logo" />
            </a>
          </div>
          {/* middle nav list  */}
          <div className={classes.middleList}>
            <ul className={classes.mainNavList}>
              {MidleNavList.map((item) => (
                <li key={item.title}>
                  <a href="#">{item.title}</a>

                  {item.submenu.length > 0 && (
                    <ul className={classes.submenuList}>
                      {item.submenu.map((item) => (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* login and registration  */}
          <div className={classes.loginRegistration}>
            <ul>
              {RightNav.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
