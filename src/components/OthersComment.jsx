import classes from "./style/OthersComment.module.css";
import { commentForSchool } from "../content/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const OthersComment = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.othersComment}>
      <h1>মন্তব্য</h1>
      <div className={classes.sliderWraper}>
        <Slider {...settings}>
          {commentForSchool.map((item) => (
            <div className={classes.singleComment} key={item.commenter}>
              <p>&quot;{item.comment}&quot;</p>
              <span>{item.commenter}-</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OthersComment;
