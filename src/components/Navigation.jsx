import classes from "./style/Navigation.module.css";
import { MidleNavList, RightNav } from "../content/index";
import { mainLogo } from "../assets/assets";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  //sidebar responsive
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`${classes.navbar} ${
          isVisible ? classes.visible : classes.hidden
        }`}
      >
        <div className={`container_page flex-between`}>
          <div className={classes.logo}>
            <a href="#">
              <img src={mainLogo} alt="logo" />
            </a>
          </div>
          <div
            className={`${isActive ? classes.active : ""}  ${
              classes.responsiveNavList
            }`}
          >
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

          {/* toggle bar  */}
          <div onClick={toggleClass} className={classes.toggleBar}>
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
