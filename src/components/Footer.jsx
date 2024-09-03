import classes from "./style/Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container_page">
        <div className={classes.searchWebsite}>
          <form action="#">
            <input type="text" placeholder="এখানে লিখুন ..." />
            <input type="submit" value="অনুসন্ধান" />
          </form>
        </div>

        <div className={classes.footerWraper}>
          <div className={classes.descriptionFooter}>
            <h1>আমার বিদ্যালয়</h1>
            <p>
              মানসম্মত পরিবেশ এবং পড়া লেখাই আমাদের মুল লক্ষ্য। আপনার সন্তানকে
              আধুনিক বিশ্বের সাথে তাল মিলিয়ে এবং কুরআন ও হাদিসের সাথে সামঞ্জস্য
              রেখে আদর্শবান মানুষ করে গড়ে তোলা আমাদের দায়িত্ব। আপনার সন্তানকে
              একটি আদর্শ ও মান সম্মত প্রতিষ্ঠানে ভর্তি করাতে চাইলে এখনি-
            </p>
          </div>
          <div>
            <h3>যোগাযোগ-</h3>
            <ul>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
            </ul>
          </div>
          <div>
            <h3>অন্যান্য-</h3>
            <ul>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
              <li>মানসম্মত পরিবেশ এবং পড়া লেখাই</li>
            </ul>
          </div>
          <div>
            <h3>যোগাযোগ-</h3>
            <ul>
              <li>+880 184 5049 128</li>
              <li>
                <a href="#">facebook, </a>
                <a href="#">twitter, </a>
                <a href="#">linkdil</a>
              </li>
              <li>mostakimbillahn210@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
