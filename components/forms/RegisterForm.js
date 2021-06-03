import { useState } from "react";
import Router from "next/router";
import { Formik, Form } from "formik";
import styles from "styles/partials/Form.module.scss";
import { BASE_URL, AUTH_PATH } from "utils/constants";
import { setCookie } from "nookies";
import RegisterSchema from "./schemas/RegisterShema"
import { FaUserCircle, FaLock, FaUnlock } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Register = () => {
  // const [passVisible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");

  const handleSubmit = async () => {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    };
    if (password !== confirmed) {
      toast.error("Passwords do not match!");
      return;
    }
    const register = await fetch(`${BASE_URL}${AUTH_PATH}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    });

    const registerResponse = await register.json();
    setCookie("jwt", registerResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    Router.push("/");
  };
  //const visible = () => {
  //  setVisible(passVisible ? false : true);
  //};

  return (
    <>
      <h2>Register here</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmed: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <>
          <h1 className={styles.title}>Sign Up</h1>
            <Form className={styles.signup} onSubmit={handleSubmit}>
              <div className={styles.group}>
                <label htmlFor="username" className={styles.label}>
                  <FaUserCircle />
                </label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="Username *"
                  autoComplete="username"
                  className={styles.input}
                  name="username"
                />
                {errors.username && touched.username ? (
                  <div className="error">{errors.username}</div>
                ) : null}
              </div>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="email">
                  <IoMdMail />
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email *"
                  autoComplete="email"
                  className={styles.input}
                  name="email"
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>

              <div className={styles.group}>
                <label className={styles.label} htmlFor="password">
                  <FaLock />
                </label>
                  <input
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password *"
                    autoComplete="current-password"
                    className={styles.input}
                    name="password"
                  />
                {errors.password && touched.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </div>

              <div className={styles.group}>
                <label className={styles.label} htmlFor="confirmed">
                  <FaUnlock />
                </label>
                  <input
                    type={"password"}
                    onChange={(e) => setConfirmed(e.target.value)}
                    value={confirmed}
                    placeholder="Confirm Password *"
                    className={styles.input}
                    name="confirmed"
                  />
                {errors.confirmed && touched.confirmed ? (
                  <div className="error">{errors.confirmed}</div>
                ) : null}
              </div>

              <button
                disabled={!username || !email || !password}
                type="submit"
                value="Register"
                className={styles.signupButton}
              >
                Sign Up
              </button>
            </Form>
            <div className={styles.signText}>
              Already a User?{" "}
              <a className={styles.sign} href="/login-page">
                Log In
              </a>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default Register;
