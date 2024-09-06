import classes from "./style/ApplicationForm.module.css";

const ApplicationForm = () => {
  return (
    <div className={classes.applicationFormWraper}>
      <h1>আবেদন ফরম পূরণ করুন</h1>

      <form action="#">
        {/* name  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input type="text" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">শেষ নাম:</label>
            <input type="text" />
          </div>
        </div>

        {/* date & nation  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম তারিখ:</label>
            <input type="date" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select name="" id="">
              <option value="">বাংলাদেশী</option>
              <option value="">অন্যান্য</option>
            </select>
          </div>
        </div>
        {/* jonmo sonod number  */}
        <div className={`${classes.singleLine} ${classes.DateOfBirthIdentity}`}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম সনদ নাম্বার:</label>
            <input type="number" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">লিঙ্গ:</label>
            <select name="" id="">
              <option value="male">পুরুষ</option>
              <option value="female">নারী</option>
              <option value="other">অন্যান্য</option>
            </select>
          </div>
        </div>

        {/* fother mother  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">পিতার নাম:</label>
            <input type="text" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">মাতার নাম:</label>
            <input type="text" />
          </div>
        </div>
        {/* baba mayer id number  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">পিতার ভোটার আইডি নাম্বার:</label>
            <input type="number" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">মাতার ভোটার আইডি নাম্বার:</label>
            <input type="number" />
          </div>
        </div>

        {/* tikana  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">বিভাগ:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জেলা:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>
        {/* thana  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">থানা:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
          {/* psot office  */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">পোষ্ট অফিস:</label>
            <select name="" id="">
              <input type="text" />
            </select>
          </div>
        </div>
        <div className={classes.singleLine}>
          {/* zip code */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">জিপ কোড:</label>
            <select name="" id="">
              <input type="number" />
            </select>
          </div>
        </div>

        {/* purbe kothay porto  */}
        <div className={`${classes.singleLine} ${classes.previouScholl}`}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">পূর্বের প্রতিষ্ঠানের নাম:</label>
            <input type="text" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">শ্রেণী:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>

        {/* akhon kon class a vorti kraben  */}
        <div className={classes.singleLine}>
          {/* class  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">ভর্তির শ্রেণী:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
          {/* bivag  */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">শাখা:</label>
            <select name="" id="">
              <option value="">বিজ্ঞান</option>
              <option value="">মানবিক</option>
            </select>
          </div>
        </div>

        {/* account kholar jnno email and password  */}
        <div className={classes.singleLine}>
          {/* email  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">ইমেইল:</label>
            <input type="email" />
          </div>
          {/* mobile number  */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">মোবাইল নাম্বার:</label>
            <input type="number" />
          </div>
        </div>
        <div className={classes.singleLine}>
          {/* password  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">পাসওয়ার্ড:</label>
            <input type="password" />
          </div>
          {/* confirm password */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">পুনরায় আবার পাসওয়ার্ড দিন:</label>
            <input type="password" />
          </div>
        </div>

        <div className={classes.singleLine}>
          {/* img  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">পাসপোর্ট সাইজ ছবি:</label>
            <input type="file" />
          </div>
        </div>
        <div className={classes.submitButton}>
          <button>নিশ্চিত করুন</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
