import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import mapImage from "../../../assets/img/map-image.png"
import style from "./registrationForm.module.scss";


const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Это поле обязательное"),
    departement: Yup.string().required("Это поле обязательное"),
    email: Yup.string().required("Это поле обязательное"),
  });

  const onSubmit = ({ resetForm }) => {
    resetForm();
    console.log("Данные отправлены");

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
          {({ errors, touched }) => (
            <Form className={style.form}>
              <p className={style.form__text}>Name *</p>
              <Field
                className={`${style.form__name} ${errors.name && touched.name ? style.errorBorder : ""}`}
                type="text"
                name="name"
                placeholder="Full Name *"
              ></Field>
              <p className={style.form__text}>Email address *</p>
              <Field
                className={`${style.form__email} ${errors.email && touched.email ? style.errorBorder : ""}`}
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
                <Button isPing={true} text="Sign Up" type="submit" onClick={onSubmit}></Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
};

export default RegistrationForm;
