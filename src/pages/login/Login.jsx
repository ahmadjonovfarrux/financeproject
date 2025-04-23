import { Link } from "react-router-dom";
import style from "./Login.module.scss";
import { FormInput } from "../../components";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("Email");
    const password = formData.get("Password");
    console.log(email, password);
  };
  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login__left}>
          <img src="../images/logo-large.svg" alt="image of logo" width={121} />
          <h3 className={style.title}>
            Keep track of your money and save for your future
          </h3>
          <p className={style.text}>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <div className={style.login__right}>
          <div>
            <h1 className={style.login__title}>Login</h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className={style.login__form}
            >
              <FormInput type="email" label="Email" name="Email" />
              <FormInput type="password" label="Password" name="Password" />
              <button type="submit" className={`${style.login__btn} btn`}>
                Login
              </button>
              <p>
                Need to create an account? <Link to="/register">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
