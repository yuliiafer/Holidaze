import styles from "../styles/Home.module.scss";
import Head from "../components/layout/Head";
import RegisterForm from "../components/forms/RegisterForm";

function Register() {
  return (
    <div className={styles.main}>
      <Head title="Sign Up" />
      <RegisterForm />
    </div>
  );
}

export default Register;