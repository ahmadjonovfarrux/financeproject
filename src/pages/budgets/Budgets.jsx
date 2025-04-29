import style from "./Budgets.module.scss";

function Budgets() {
  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    before: {
      backgroundColor: color,
      borderRadius: 10,
      content: `" "`,
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const colourStyles = {
    control:(styles) => ({...styles, backgroundColor:"white"}),
    option:(styles, {data, isDisabled, isFocused,
      isSelected }) => {
        const color = chroma(data.color);
      }
  }

  return <div></div>;
}

export default Budgets;
