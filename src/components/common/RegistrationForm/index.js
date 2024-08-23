import { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Button from "../Button/Button";
import mapImage from "../../../assets/img/map-image.png";
import style from "./registrationForm.module.scss";
import { getInlineStylesSelect } from "./constants/getInlineStylesSelect";
import { ArrowIcon } from "../../../assets/svg/icons";

const RegistrationForm = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Это поле обязательное"),
    departement: Yup.string().required("Это поле обязательное"),
    email: Yup.string().required("Это поле обязательное"),
    phone: Yup.number(),
  });

  const onSubmit = (values, { resetForm }) => {
    resetForm();
    console.log(values, "Данные отправлены");
    alert("Отправленные данные можно увидеть в консоле");
  };

  const departmentOptions = [
    { value: "HR", label: "HR" },
    { value: "IT", label: "IT" },
    { value: "Marketing", label: "Marketing" },
  ];

  const handleMenuOpen = () => {
    setIsSelectOpen(true);
  };

  const handleMenuClose = () => {
    setIsSelectOpen(false);
  };

  const CustomIndicator = (props) => {
    const {
      selectProps: { menuIsOpen },
    } = props;

    return (
      <div
        {...props.innerProps}
        className={`${style.customIndicator} ${menuIsOpen ? style.open : ""}`}
      >
        <ArrowIcon />
      </div>
    );
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
          {({ errors, touched, setFieldValue, values }) => (
            <Form className={style.form}>
              <p
                className={`${style.form__text} ${errors.name && touched.name ? style.errorStyle : ""
                  }`}
              >
                Name *
              </p>
              <Field
                className={`${style.form__name} ${errors.name && touched.name ? style.errorBorder : ""
                  }`}
                type="text"
                name="name"
                placeholder="Full Name *"
              ></Field>
              <p
                className={`${style.form__text} ${errors.departement && touched.departement
                    ? style.errorStyle
                    : ""
                  }`}
              >
                Departement *
              </p>

              <div className={style.form__selectWrapper}>
                <Select
                  options={departmentOptions}
                  placeholder="Please Select"
                  onChange={(option) =>
                    setFieldValue("departement", option.value)
                  }
                  value={
                    departmentOptions.find(
                      (option) => option.value === values.departement
                    ) || null
                  }
                  onMenuOpen={handleMenuOpen}
                  onMenuClose={handleMenuClose}
                  className={`${style.select} ${isSelectOpen ? style.selectOpen : ""
                    }`}
                  components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: CustomIndicator,
                  }}
                  styles={getInlineStylesSelect(errors, touched)}
                />
              </div>

              <p
                className={`${style.form__text} ${errors.email && touched.email ? style.errorStyle : ""
                  }`}
              >
                Email address *
              </p>
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
                <Button isPing={true} text="Sign Up" type="submit"></Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
