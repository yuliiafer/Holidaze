import Head from "components/layout/Head"
import styles from "styles/Home.module.scss";
import LoginForm from "components/forms/LoginForm";

export default function LoginPage() {
  return (
    <div className={styles.main}>
      <Head title="Login" />
      <h1 className={styles.title}>Login</h1>
      <LoginForm />
    </div>
  );
}