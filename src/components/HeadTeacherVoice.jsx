import classes from "./style/HeadTeacherVoice.module.css";
import { HeadTeacher } from "../assets/assets";
const HeadTeacherVoice = () => {
  return (
    <div className={classes.VoiceTeacher}>
      <h1>প্রধান শিক্ষাকের বাণী</h1>
      <div className={classes.voiceWraper}>
        <div className={classes.voicerPhoto}>
          <div className={classes.headTeacherDocuments}>
            <img src={HeadTeacher} alt="" />
            <div>
              <p className={classes.name}>মোহাম্মদ মোস্তাকিম বিল্লাহ</p>
              <p className={classes.school}>প্রধান শিক্ষক আমার বিদ্যালয়</p>
              <p className={classes.degree}>মাস্টার্স ইন সাইন্স বোটানি</p>
            </div>
          </div>
        </div>
        <div className={classes.theVoice}>
          <p className={classes.firstVoice}>
            &quot; মানসম্মত পরিবেশ এবং পড়া লেখাই আমাদের মুল লক্ষ্য। আপনার
            সন্তানকে আধুনিক বিশ্বের সাথে তাল মিলিয়ে এবং কুরআন ও হাদিসের সাথে
            সামঞ্জস্য রেখে আদর্শবান মানুষ করে গড়ে তোলা আমাদের দায়িত্ব। আপনার
            সন্তানকে একটি আদর্শ ও মান সম্মত প্রতিষ্ঠানে ভর্তি করাতে চাইলে এখনি-
            মানসম্মত পরিবেশ এবং পড়া লেখাই আমাদের মুল লক্ষ্য। আপনার
            সন্তানকে আধুনিক বিশ্বের সাথে তাল মিলিয়ে এবং কুরআন ও হাদিসের সাথে
            সামঞ্জস্য রেখে আদর্শবান মানুষ করে গড়ে তোলা আমাদের দায়িত্ব। আপনার
            সন্তানকে একটি আদর্শ ও মান সম্মত প্রতিষ্ঠানে ভর্তি করাতে চাইলে এখনি- মানসম্মত পরিবেশ এবং পড়া লেখাই আমাদের মুল লক্ষ্য। আপনার
            সন্তানকে আধুনিক বিশ্বের সাথে তাল মিলিয়ে এবং কুরআন ও হাদিসের সাথে
            সামঞ্জস্য রেখে আদর্শবান মানুষ করে গড়ে তোলা আমাদের দায়িত্ব। আপনার
            সন্তানকে একটি আদর্শ ও মান সম্মত প্রতিষ্ঠানে ভর্তি করাতে চাইলে এখনি-
            &quot;
          </p>
          <div className={classes.voiserInfo}>
            <p>&quot;প্রধান শিক্ষক আমার বিদ্যালয়&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadTeacherVoice;
