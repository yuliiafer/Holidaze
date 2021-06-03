import { Formik, Form } from "formik";
import { BASE_URL, AUTH_PATH } from "../../utils/constants";
import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import styles from "../../styles/partials/Form.module.scss";
import { FaUserCircle, FaKey } from 'react-icons/fa';
import LoginSchema from "./schemas/LoginSchema"

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [password, setPassword] = useState("");
  //const [passVisible, setVisible] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    setSubmitting(true);
    setLoginError(null);
    const loginInfo = {
      identifier: identifier,
      password: password,
    };
    try {
      const login = await fetch(`${BASE_URL}${AUTH_PATH}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      setSuccess(true);
      const loginResponse = await login.json();

      setCookie(null, "jwt", loginResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      if (loginResponse.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
      setLoginError(
        error.toString,
        toast.error("Incorrect username or password !", {
          position: toast.POSITION.TOP_LEFT,
        })
      );
    } finally {
      setSubmitting(false);
    }
  };
  //const visible = () => {
  //  setVisible(passVisible ? false : true);
  //};

  return (
    <Formik
      initialValues={{
        identifier: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched }) => (
        <>
        <h1 className={styles.title}>Login</h1>
          <Form className={styles.signup}>
            <div>{loginError}</div>
            <div>{success}</div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="identifier">
                <FaUserCircle />
              </label>
              <input
                type="text"
                onChange={(e) => setIdentifier(e.target.value)}
                value={identifier}
                className={styles.input}
                name="identifier"
                autoComplete="username"
                placeholder="Email *"
              />
              {errors.identifier && touched.identifier ? (
                <div className="error">{errors.identifier}</div>
              ) : null}
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="password">
                <FaKey />
              </label>
  
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={"password"}
                  className={styles.input}
                  name="password"
                  placeholder="Password *"
                  autoComplete="current-password"
                />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            <button
              disabled={!identifier || !password}
              onClick={() => handleLogin(submitting)}
              type="submit"
              className={styles.signupButton}
            >
              Login
            </button>
          </Form>
          <div className={styles.signText}>
            Not Registered?{" "}
            <a className={styles.sign} href="/register">
              Sign Up
            </a>
          </div>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
