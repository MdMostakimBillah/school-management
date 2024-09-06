import { useState } from "react";
import classes from "./style/ApplicationForm.module.css";
import { country } from "../content/index";
const ApplicationForm = () => {
  // const [country, setCountry] = useState([]);
  const [distric, setDistric] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [postOffice, setPostOffice] = useState([]);

  console.log(country);

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    BirthSertificateNumber: "",
    fatherName: "",
    motherName: "",
    fatherIDNumber: "",
    motherIDNumber: "",
    absenceParentName: "",
    absenceParentIDNumber: "",
    zipCode: "",
    previousInstitution: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    gendar: "",
    selectedDivision: "",
    selectedDistricts: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process the form data
  };

  return (
    <div className={classes.applicationFormWraper}>
      <h1>আবেদন ফরম পূরণ করুন</h1>

      <form action="#" onSubmit={handleSubmit}>
        {/* name  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">প্রথম নাম:</label>
            <input
              name="studentFirstName"
              type="text"
              value={formData.studentFirstName}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">শেষ নাম:</label>
            <input
              name="studentLastName"
              type="text"
              value={formData.studentLastName}
              onChange={inputHandler}
            />
          </div>
        </div>

        {/* date & nation  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম তারিখ:</label>
            <input
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জাতীয়তা:</label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={inputHandler}
            >
              <option value="">জাতীয়তা নির্ধারণ করুন-</option>
              <option value="বাংলাদেশী">বাংলাদেশী</option>
              <option value="অন্যান্য">অন্যান্য</option>
            </select>
          </div>
        </div>
        {/* jonmo sonod number  */}
        <div className={`${classes.singleLine} ${classes.DateOfBirthIdentity}`}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">জন্ম সনদ নাম্বার:</label>
            <input
              name="BirthSertificateNumber"
              type="number"
              value={formData.BirthSertificateNumber}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">লিঙ্গ:</label>
            <select
              name="gendar"
              value={formData.gendar}
              onChange={inputHandler}
            >
              <option value="">লিঙ্গ নির্ধারণ করুন-</option>
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
            <input
              name="fatherName"
              type="text"
              value={formData.fatherName}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">মাতার নাম:</label>
            <input
              name="motherName"
              type="text"
              value={formData.motherName}
              onChange={inputHandler}
            />
          </div>
        </div>
        {/* baba mayer id number  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">পিতার ভোটার আইডি নাম্বার:</label>
            <input
              name="fatherIDNumber"
              type="text"
              value={formData.fatherIDNumber}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">মাতার ভোটার আইডি নাম্বার:</label>
            <input
              name="motherIDNumber"
              type="number"
              value={formData.motherIDNumber}
              onChange={inputHandler}
            />
          </div>
        </div>

        {/* baba mayer obortomane jini acen  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">পিতা-মাতার অবর্তমানে যিনি আছেন তার নাম:</label>
            <input
              name="absenceParentName"
              type="text"
              value={formData.absenceParentName}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">
              পিতা-মাতার অবর্তমানে যিনি আছেন তার ভোটার আইডি নাম্বার:
            </label>
            <input
              name="absenceParentIDNumber"
              type="number"
              value={formData.absenceParentIDNumber}
              onChange={inputHandler}
            />
          </div>
        </div>

        {/* tikana  */}
        <div className={classes.singleLine}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">বিভাগ:</label>
            <select
              name="selectedDivision"
              value={formData.selectedDivision}
              onChange={inputHandler}
            >
              <option value="">বিভাগ নির্ধারণ করুন-</option>
              {/* {country.map((item, inex) =>
                item.name && formData.nationality
                  ? item.division.map((allDivision, index) => (
                      <option key={index} value={allDivision.name}>
                        {allDivision.name}
                      </option>
                    ))
                  : " "
              )} */}
            </select>
          </div>
          <div className={classes.SecondInpur}>
            <label htmlFor="">জেলা:</label>
            <select
              name="selectedDistricts"
              value={formData.selectedDistricts}
              onChange={inputHandler}
            >
              <option value="">জেলা নির্ধারণ করুন- </option>
              {/* {country.map((item, inex) =>
                item.name && formData.nationality
                  ? item.division.map((allDivision, index) =>
                      console.log(allDivision.name && formData.selectedDivision)
                    )
                  : " "
              )} */}
              {/* {console.log(formData.selectedDivision)} */}
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
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
              <option value="">জাতীয়তা:</option>
            </select>
          </div>
        </div>
        <div className={classes.singleLine}>
          {/* zip code */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">জিপ কোড:</label>
            <input
              name="zipCode"
              type="number"
              value={formData.zipCode}
              onChange={inputHandler}
            />
          </div>
        </div>

        {/* purbe kothay porto  */}
        <div className={`${classes.singleLine} ${classes.previouScholl}`}>
          <div className={classes.firtsInpur}>
            <label htmlFor="">পূর্বের প্রতিষ্ঠানের নাম:</label>
            <input
              name="previousInstitution"
              type="text"
              value={formData.previousInstitution}
              onChange={inputHandler}
            />
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
            <input
              name="email"
              type="number"
              value={formData.email}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className={classes.singleLine}>
          {/* password  */}
          <div className={classes.firtsInpur}>
            <label htmlFor="">পাসওয়ার্ড:</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={inputHandler}
            />
          </div>
          {/* confirm password */}
          <div className={classes.SecondInpur}>
            <label htmlFor="">পুনরায় আবার পাসওয়ার্ড দিন:</label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={inputHandler}
            />
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
          <button type="submit">নিশ্চিত করুন</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
