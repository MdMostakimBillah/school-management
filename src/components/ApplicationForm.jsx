import classes from "./style/ApplicationForm.module.css";

const ApplicationForm = () => {
  return (
    <div className={classes.applicationFormWraper}>
      <h1>আবেদন ফরম পূরণ করুন</h1>

      <form action="#">
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
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম তারিখ:</label>
            <input type="text" />
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
      </form>
    </div>
  );
};

export default ApplicationForm;
