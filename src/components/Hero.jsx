import classes from "./style/Hero.module.css";
import { myPlan } from "../assets/assets";
const Hero = () => {
  return (
    <div className={`${classes.Hero} flex-between`}>
      <div className={classes.DescriptionSection}>
        <h1>&quot;পড়ো তোমার প্রভুর নামে যিনি তোমাকে সৃষ্টি করেছেন&quot;</h1>
        <p>
          মানসম্মত পরিবেশ এবং পড়া লেখাই আমাদের মুল লক্ষ্য। আপনার সন্তানকে আধুনিক
          বিশ্বের সাথে তাল মিলিয়ে এবং কুরআন ও হাদিসের সাথে সামঞ্জস্য রেখে
          আদর্শবান মানুষ করে গড়ে তোলা আমাদের দায়িত্ব।
        </p>
        <p>
          আপনার সন্তানকে একটি আদর্শ ও মান সম্মত প্রতিষ্ঠানে ভর্তি করাতে চাইলে
          এখনি-
        </p>
        <button> আবেদন করুন </button>
      </div>
      <div className={classes.animatedImage}>
        <img src={myPlan} alt="" />
      </div>
    </div>
  );
};

export default Hero;
