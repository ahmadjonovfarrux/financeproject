import { useState } from "react";
import style from "./Budgets.module.scss";
import ReactApexChart from "react-apexcharts";
import { useCollection } from "../../hooks/useCollection";
import chroma from "chroma-js";
import Select from "react-select";
import { Link } from "react-router-dom";

// import { ColourOption, colourOptions } from "./docs/data";

function Budgets() {
  const [color, setColor] = useState(null);
  const [modal, setModal] = useState(false);
  const [module, setModule] = useState(false);
  const { data: budgets } = useCollection("budgets");
  const { data: transactions } = useCollection("transactions");

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", used: false },
    { value: "blue", label: "Blue", color: "#0052CC", used: false },
    { value: "purple", label: "Purple", color: "#5243AA", used: false },
    { value: "red", label: "Red", color: "#FF5630", used: false },
    { value: "orange", label: "Orange", color: "#FF8B00", used: false },
    { value: "yellow", label: "Yellow", color: "#FFC400", used: false },
    { value: "green", label: "Green", color: "#36B37E", used: false },
    { value: "forest", label: "Forest", color: "#00875A", used: false },
    { value: "slate", label: "Slate", color: "#253858", used: false },
    { value: "silver", label: "Silver", color: "#666666", used: false },
  ];
  const [state, setState] = useState({
    series: [7.7, 5.4, 10.3, 76.9],
    options: {
      chart: {
        type: "donut",
        fontFamily: "Public Sans",
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
              },
              formatter: function (val, opts) {
                return;
              },
            },
          },
        },
      },
    },
  });

  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

  const formatOptionLabel = ({ label, used }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{label}</span>
        {used && (
          <span style={{ marginLeft: 10, color: "red", fontSize: 12 }}>
            already used
          </span>
        )}
      </div>
    );
  };
  return (
    <div className={style.budgets}>
      {/* budgets head */}
      <div className={style.budgets__head}>
        <h2 className={style.budgets__title}>Budgets</h2>
        <div className={style.budgets__btnBox}>
          <button
            className={style.budgets__btn}
            onClick={() => setModule(!module)}
          >
            + Add New Budget
          </button>
          <div className={`miniModule ${modal ? "modal" : ""}`}>
            <option>Edit Budget</option>
            <option className={style.delete}>Delete Budget</option>
          </div>
        </div>
      </div>

      <div className={style.budgets__body}>
        {/* budgets edit button */}
        <div className={`budgets__module ${module ? "module" : ""}`}>
          <h2 className={style.budgets__module__title}>
            Add New Budget
            <img src="../images/icon-close-modal.svg" alt="close icon" />
          </h2>
          <p className={style.budgets__module__text}>
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </p>
          <div>
            <form className={style.budgets__form}>
              <label htmlFor="category-select">Budget Category</label>
              <select name="" id="">
                {budgets &&
                  budgets.map((b) => {
                    return (
                      <option key={b.id} value="">
                        {b.category}
                      </option>
                    );
                  })}
              </select>
              <label htmlFor="speed-input">
                <span>Maximum Speed</span>
              </label>
              <input type="text" placeholder="S e.g.2000" />
              <label htmlFor="color-select">
                <span>Theme</span>
              </label>
              <Select
                inputId="color-select"
                defaultValue={colourOptions[2]}
                options={colourOptions}
                styles={colourStyles}
                formatOptionLabel={formatOptionLabel}
              />
            </form>
          </div>
        </div>
        {/* budgets delete button  */}
        <div className={`budgets__module ${module ? "module" : ""}`}>
          <h2 className={style.budgets__module__title}>
            Add New Budget
            <img src="../images/icon-close-modal.svg" alt="close icon" />
          </h2>
          <p className={style.budgets__module__text}>
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </p>
          <div>
            <form className={style.budgets__form}>
              <label htmlFor="category-select">Budget Category</label>
              <select name="" id="">
                {budgets &&
                  budgets.map((b) => {
                    return (
                      <option key={b.id} value="">
                        {b.category}
                      </option>
                    );
                  })}
              </select>
              <label htmlFor="speed-input">
                <span>Maximum Speed</span>
              </label>
              <input type="text" placeholder="S e.g.2000" />
              <label htmlFor="color-select">
                <span>Theme</span>
              </label>
              <Select
                inputId="color-select"
                defaultValue={colourOptions[2]}
                options={colourOptions}
                styles={colourStyles}
                formatOptionLabel={formatOptionLabel}
              />
            </form>
          </div>
        </div>

        {/* chart */}
        <div className={style.budgets__spendingSum}>
          <div id="my-chart" style={{ width: "320px" }}>
            <div id="chart">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
              />
            </div>
            <div id="html-dist"></div>
          </div>
          <div>
            <h3 className={style.budgets__spendingTitle}>Spending Summery</h3>
            <div className={style.budgets__summery}>
              {budgets &&
                budgets.map((b) => {
                  return (
                    <div
                      key={b.id}
                      style={{
                        borderLeft: `3px solid ${b.theme}`,
                      }}
                      className={style.summeryBox}
                    >
                      <h4>{b.category}</h4>
                      <p>
                        <span>${b.maximum / 5}</span> of {b.maximum}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Category */}
        <div className={style.budgets__categoryWrapper}>
          {budgets &&
            budgets.map((b) => {
              return (
                <div key={b.id} className={style.category__Boxes}>
                  <div className={style.categoryBox__head}>
                    <h2 className={style.categoryBox__title}>
                      <div
                        className={`${style.categoryBox__dot}`}
                        style={{ backgroundColor: `${b.theme}` }}
                      ></div>
                      {b.category}
                    </h2>
                    <img
                      src="../images/icon-ellipsis.svg"
                      alt="image of dotes"
                    />
                  </div>
                  <p>Maximum of {b.maximum}</p>
                  <div className={style.categoryBox__progress}>
                    <div
                      className={style.categoryBox__innerB}
                      style={{
                        backgroundColor: `${b.theme}`,
                      }}
                    ></div>
                  </div>
                  <div className={style.category__info}>
                    <div
                      className={style.spent__info}
                      style={{
                        borderLeftColor: `${b.theme}`,
                      }}
                    >
                      <p>Spent</p>
                      <h4>35</h4>
                    </div>
                    <div className={style.remaining__info}>
                      <p>Remaining</p>
                      <h4>{b.maximum - 35}</h4>
                    </div>
                  </div>
                  <div className={style.spending__wrapper}>
                    <h4>
                      Latest Spending{" "}
                      <span>
                        <Link to="/" className={style.spending__link}>
                          See All
                          <img
                            src="../images/icon-caret-right.svg"
                            alt="image of right icon"
                          />
                        </Link>
                      </span>
                    </h4>
                    <div className={style.spendedPeople}>
                      {transactions &&
                        transactions.slice(0, 3).map((t) => {
                          return (
                            <div className={style.spentPerson}>
                              <img src={t.avatar} alt="image of person" />
                              <h4>{t.name}</h4>
                              <span>-$5.00</span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Budgets;
