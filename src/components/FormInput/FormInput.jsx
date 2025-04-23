import style from "./FormInput.module.scss";

function FormInput({ label, type = "text", name }) {
  return (
    <>
      <label className={style.form__input}>
        <span>{label}</span>
        <input type={type} name={name} />
      </label>
    </>
  );
}

export default FormInput;
