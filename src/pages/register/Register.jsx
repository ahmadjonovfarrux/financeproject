import { Link } from "react-router-dom";
import style from "../login/Login.module.scss";
import { FormInput } from "../../components";
import { useRegister } from "../../hooks/useRegister";

function Register() {
  const { data, isPending, register } = useRegister();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("Name");
    const email = formData.get("Email");
    const password = formData.get("Password");
    register(name, email, password);
    e.target.reset();
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
            <h1 className={style.login__title}>Register</h1>
            <form onSubmit={handleSubmit} className={style.login__form}>
              <FormInput type="text" label="Name" name="Name" />
              <FormInput type="email" label="Email" name="Email" />
              <FormInput
                type="password"
                label="Create password"
                name="Password"
              />
              {!isPending && (
                <button type="submit" className={`${style.login__btn} btn`}>
                  Sign up
                </button>
              )}
              {isPending && (
                <button
                  disabled
                  type="submit"
                  className={`${style.login__btn} btn`}
                >
                  Loading....
                </button>
              )}
              <p>
                If you have an account <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
