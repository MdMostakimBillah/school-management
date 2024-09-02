import classes from "./style/GoodResultStudents.module.css";
import { goodResultStudens } from "../content/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const GoodResultStudents = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={classes.studentsResult}>
      <h1>আমাদের সাফল্য</h1>
      <div className={classes.caroselSlider}>
        <Slider {...settings}>
          {goodResultStudens.map((item) => (
            <div key={item.name} className={classes.signleSliderItem}>
              <div className={classes.sliderWraper}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div className={classes.descriptionDetails}>
                  <h4>{item.name}</h4>
                  <p>
                    <b>জিপিআ: </b>
                    <span>{item.gpa}</span>
                  </p>
                  <p>
                    <b>অবস্থান: </b>
                    <span>{item.position}</span>
                  </p>
                  <p>
                    <b>শ্রেণী: </b>
                    <span>{item.class}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GoodResultStudents;
