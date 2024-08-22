import { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Select from 'react-select';
import Button from "../Button/Button";
import mapImage from "../../../assets/img/map-image.png";
import style from "./registrationForm.module.scss";
import { ArrowIcon } from "../../../assets/svg/icons";

const RegistrationForm = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Это поле обязательное"),
    departement: Yup.string().required("Это поле обязательное"),
    email: Yup.string().required("Это поле обязательное"),
  });

  const onSubmit = ({ resetForm }) => {
    resetForm();
    console.log("Данные отправлены");
  };

  const departmentOptions = [
    { value: 'HR', label: 'HR' },
    { value: 'IT', label: 'IT' },
    { value: 'Marketing', label: 'Marketing' },
  ];

  // const handleSelectChange = (option, actionMeta) => {
  //   setFieldValue('departement', option.value);
  // };

  const handleMenuOpen = () => {
    setIsSelectOpen(true);
  };

  const handleMenuClose = () => {
    setIsSelectOpen(false);
  };

  return (
    <div className={style.registrationForm}>
      <div className={style.imageBlock}>
        <img className={style.image} src={mapImage} alt="map" />
      </div>
      <div className={style.formBlock}>
        <h2 className={style.title}>Registration</h2>
        <Formik
          initialValues={{
            name: "",
            departement: "",
            email: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className={style.form}>
              <p className={style.form__text}>Name *</p>
              <Field
                className={`${style.form__name} ${errors.name && touched.name ? style.errorBorder : ""
                  }`}
                type="text"
                name="name"
                placeholder="Full Name *"
              ></Field>
              <p className={style.form__text}>Departement *</p>
              {/* <div
                className={`${style.form__selectWrapper} ${isSelectOpen ? style.selectOpen : ""
                  }`}
                onClick={() => setIsSelectOpen(!isSelectOpen)}
              >
                <Field
                  as="select"
                  name="departement"
                  className={`${style.form__select} ${errors.departement && touched.departement
                    ? style.errorBorder
                    : ""
                    }`}
                >
                  <option className={`${style.option} ${style.optionDisable}`} value="" disabled>
                    Please Select
                  </option>
                  <option className={style.option} value="HR">
                    HR
                  </option>
                  <option className={style.option} value="IT">
                    IT
                  </option>
                  <option className={style.option} value="Marketing">
                    Marketing
                  </option>
                </Field>
                <span
                  className={`${style.form__selectArrow} ${isSelectOpen ? style.selectOpenArrow : ""
                    }`}
                >
                  <ArrowIcon />
                </span>
              </div> */}
              <div className={style.form__selectWrapper}>
                <Select
                  // classNamePrefix={style.select}
                  // options={departmentOptions}
                  // placeholder="Please Select"
                  // onChange={(option) => setFieldValue('departement', option.value)}
                  // styles={{
                  //   control: (base) => ({
                  //     ...base,
                  //     borderColor: errors.departement && touched.departement ? 'red' : base.borderColor,
                  //   }),
                  //   placeholder: (base) => ({
                  //     ...base,
                  //     color: 'blue', // Цвет placeholder
                  //   }),
                  // }}

                  classNamePrefix={style.select}
                  options={departmentOptions}
                  placeholder="Please Select"
                  onChange={(option) => setFieldValue('departement', option.value)}
                  onMenuOpen={handleMenuOpen}
                  onMenuClose={handleMenuClose}
                  className={`${style.select} ${isSelectOpen ? style.selectOpen : ''}`}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.departement && touched.departement ? 'red' : "none",
                      width: "100 %",
                      padding: "14px 0 14px 20px",
                      backgroundColor: "#EEEEF6",
                      border: "none",
                      borderRadius: "8px",
                      // appearance: none;
                      cursor: "pointer",
                      color: "#172755",
                    }),
                    container: (base) => ({
                      ...base,
                      padding: "0px",
                      marginLeft: "0",
                      marginRight: "auto",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: 'blue', // Цвет placeholder
                    }),
                  }}
                />
              </div>

              <p className={style.form__text}>Email address *</p>
              <Field
                className={`${style.form__email} ${errors.email && touched.email ? style.errorBorder : ""
                  }`}
                type="text"
                name="email"
                placeholder="example@gmail.com"
              ></Field>
              <p className={style.form__text}>Phone</p>
              <Field
                className={style.form__phone}
                type="text"
                name="phone"
                placeholder="Phone number"
              ></Field>

              <div className={style.form__button}>
                <Button
                  isPing={true}
                  text="Sign Up"
                  type="submit"
                  onClick={onSubmit}
                ></Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
