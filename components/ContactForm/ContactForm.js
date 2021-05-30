import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "styles/partials/Contact.module.scss";
import cx from "classnames";
import request from "../Api";
import swal from "sweetalert2";
import Cleave from "cleave.js/react";

const Input = ({ field, type, form: { touched, errors }, ...props }) => {
  const classNames = cx(
    "input",
    { success: touched[field.name] && !errors[field.name] },
    { error: touched[field.name] && errors[field.name] }
  );
  return (
    <div style={{ position: "relative" }}>
      <input type={type} className={classNames} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

const NumInput = ({ field, type, form: { touched, errors }, ...props }) => {
  const classNames = cx(
    "input",
    { success: touched[field.name] && !errors[field.name] },
    { error: touched[field.name] && errors[field.name] }
  );
  return (
    <div style={{ position: "relative" }}>
      <Cleave
        placeholder="tel"
        options={{
          prefix: "+47",
          delimiters: [" ", "", "", ""],
          blocks: [3, 3, 2, 2],
        }}
        className={classNames}
        {...field}
        {...props}
        type={type}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

const Select = ({ field, type, form: { touched, errors }, ...props }) => {
  const classNames = cx(
    "input",
    { success: touched[field.name] && !errors[field.name] },
    { error: touched[field.name] && errors[field.name] }
  );
  return (
    <div style={{ position: "relative" }}>
      <select
        type={type}
        style={{ color: "#bababa" }}
        className={classNames}
        {...field}
        value={"default"}
        {...props}
      >
        <option value="default" hidden>
          Choose Date
        </option>
        <option value="Date 20.06-27.06">from 20 for 27 Juni</option>
        <option value="Date 3.07-10.07">from 3 for 10 July</option>
      </select>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

const Textarea = ({ field, form: { touched, errors }, ...props }) => {
  const classNames = cx(
    "input",
    { success: touched[field.name] && !errors[field.name] },
    { error: touched[field.name] && errors[field.name] }
  );
  return (
    <div style={{ position: "relative" }}>
      <textarea rows={6} className={classNames} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

const ContactForm = ({
  agreementTextColor = "#000",
  submitBtnText,
  withEmail,
  setPopupOpen,
  withPhone,
  withMessage,
  withDate,
  withDocument,
  withName = true,
  withHiddenInput,
  hiddenInputValue,
  formName,
  setNumQuestion,
  swalText = "Thank you",
  textAreaPlaceholder = "Enter your message",
  requestUrl,
}) => {
  const Schema = Yup.object().shape({
    name: withName
      ? Yup.string()
          .min(3, "Name must be at least 3 Charcters")
          .max(25, "Too long ")
          .required("Please enter your username")
      : null,
    phone: withPhone
      ? Yup.string()
          .min(9, "Incorrect phone number")
          .max(18, "Number is too long")
          .required("Please enter your number")
      : null,

    date: withDate && Yup.string().required("Please, choose another date"),
    email: withEmail
      ? Yup.string()
          .email("Email is Invalid")
          .required("Please enter your email")
      : null,
    message: withMessage
      ? Yup.string()
          .min(2, "Too short ")
          .max(300, "Too long")
          .required("Please enter your message")
      : null,
  });

  const data = {};

  const onSubmit = (values, { resetForm }) => {
    data.form = {
      url: `${requestUrl ? requestUrl : window.location.href}`,
    };
    data.inputs = [
      {
        alias: "",
        value: formName,
      },
    ];
    if (withName)
      data.inputs = [
        ...data.inputs,
        {
          alias: "Name",
          value: values.name,
        },
      ];
    if (withPhone)
      data.inputs = [
        ...data.inputs,
        {
          alias: "Tel number",
          value: values.phone,
        },
      ];
    if (withEmail)
      data.inputs = [
        ...data.inputs,
        {
          alias: "E-mail",
          value: values.email,
        },
      ];
    if (withMessage)
      data.inputs = [
        ...data.inputs,
        {
          alias: "Message",
          value: values.message,
        },
      ];

    if (withDate)
      data.inputs = [
        ...data.inputs,
        {
          alias: "Date",
          value: values.date,
        },
      ];
    if (withHiddenInput)
      data.inputs = [
        ...data.inputs,
        {
          alias: "Questions?",
          value: hiddenInputValue,
        },
      ];

    request(data)
      .then((response) => {
        if (response.status === 200) {
          if (withDocument) {
            window.open(withDocument);
          }
          if (values.name.length !== 0) {
            const name = values.name[0].toUpperCase() + values.name.slice(1);
            swal.fire({
              title: `Thank you, ${name}!`,
              text: swalText,
              icon: "success",
              confirmButtonText: "OK",
            });
          } else {
            swal.fire({
              title: `Thank you`,
              text: swalText,
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        } else throw response;
      })
      .catch((err) => {
        swal.fire({
          title: "En error has occurred",
          text: "Try later",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log(err);
      });

    resetForm({});
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
        date: "",
        hidden: "",
      }}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      <Form>
        {withName && (
          <Field component={Input} name="name" placeholder={"Your Name *"} />
        )}
        {withEmail && (
          <Field
            component={Input}
            name="email"
            type={"text"}
            placeholder={"Your E-mail *"}
          />
        )}
        {withPhone && (
          <Field
            component={NumInput}
            name="phone"
            type={"text"}
            placeholder={"Your tel *"}
          />
        )}
        {withMessage && (
          <Field
            component={Textarea}
            name="message"
            placeholder={textAreaPlaceholder}
          />
        )}
        {withDate && <Field component={Select} name="date" type={"select"} />}
        <div className="agreementBlock">
          <input className="agreementCheckbox" type="checkbox" required />
          <label htmlFor="checkbox-agreement">
            <p className="checkboxText" style={{ color: agreementTextColor }}>
              I agree&nbsp;
              <a
                className="checkboxText"
                style={{
                  textDecoration: "underline",
                  color: agreementTextColor,
                }}
                href="#"
                target="_blank"
              >
                to the processing of personal information
              </a>
            </p>
          </label>
        </div>
        <button
          style={{ width: "100%" }}
          className={styles.button}
          type="submit"
          onClick={() => {
            setPopupOpen && setPopupOpen(false);
            withHiddenInput && setNumQuestion(0);
          }}
        >
          {submitBtnText}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
