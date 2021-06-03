import Head from "../components/layout/Head"
import styles from "../styles/Home.module.scss";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.main}>
      <Head title="Login" />
      <LoginForm />
    </div>
  );
}
export default LoginPage;

