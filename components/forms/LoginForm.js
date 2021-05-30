import { Formik, Form } from "formik";
import { BASE_URL, AUTH_PATH } from "utils/constants";
import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import styles from "styles/partials/Form.module.scss";
import { FaUserCircle, FaKey } from 'react-icons/fa';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [passVisible, setVisible] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    setSubmitting(true);
    setLoginError(null);
    const loginInfo = {
      identifier: identifier,
      password: password,
    };
    
      const login = await fetch(`${BASE_URL}${AUTH_PATH}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      
      const loginResponse = await login.json();

      setCookie(null, "jwt", loginResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
     
        router.push("/");

  const visible = () => {
    setVisible(passVisible ? false : true);
  };

  return (
    <Formik
      initialValues={{
        identifier: "",
        password: "",
      }}
      
      onSubmit={handleLogin}
    >
      {({ errors, touched }) => (
        <>
          <Form className={styles.signup}>
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
              <span className={styles.input}>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={passVisible ? "text" : "password"}
                  className={styles.pass}
                  name="password"
                  placeholder="Password *"
                  autoComplete="current-password"
                />
                <i
                  onClick={visible}
                  className={passVisible ? "pi pi-eye" : "pi pi-eye-slash"}
                ></i>
              </span>
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            <button
              disabled={!identifier || !password}
              onClick={() => handleLogin()}
              type="submit"
              className={styles.signupButton}
            >
              Login
            </button>
          </Form>
          <div className="c">
            Not Registered?{" "}
            <a className="f" href="/register">
              Sign Up
            </a>
          </div>
        </>
      )}
    </Formik>
  );
};
}
export default LoginForm;
