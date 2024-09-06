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
        {/* fother mother  */}
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
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>
        {/* jonmo sonod number  */}
        <div className={`${classes.singleLine} ${classes.DateOfBirthIdentity}`}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input type="text" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>

        {/* baba mayer id number  */}
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

        {/* tikana  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম তারিখ:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
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
            <label htmlFor="">জন্ম তারিখ:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
          {/* psot office  */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select name="" id="">
              <input type="text" />
            </select>
          </div>
        </div>
        <div className={classes.singleLine}>
          {/* zip code */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select name="" id="">
              <input type="number" />
            </select>
          </div>
        </div>

        {/* purbe kothay porto  */}
        <div className={`${classes.singleLine} ${classes.previouScholl}`}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input type="text" />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>

        {/* akhon ton class a vorti kraben  */}
        <div className={classes.singleLine}>
          {/* class  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম তারিখ:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
          {/* bivag  */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select name="" id="">
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>

        {/* account kholar jnno email and password  */}
        <div className={classes.singleLine}>
          {/* email  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input type="email" />
          </div>
          {/* mobile number  */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">শেষ নাম:</label>
            <input type="number" />
          </div>
        </div>
        <div className={classes.singleLine}>
          {/* password  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input type="password" />
          </div>
          {/* confirm password */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">শেষ নাম:</label>
            <input type="password" />
          </div>
        </div>

        <div className={classes.singleLine}>
          {/* img  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input type="file" />
          </div>
        </div>
        <div className={classes.submitButton}>
          <button>প্রথম নাম</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
