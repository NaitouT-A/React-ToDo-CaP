import classNames from "classnames";
import "bluma/css/bluma.css";

export const Filter = (props) => {
  //propsを定義
  const { value, onChange } = props;

  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, "ALL")}
        className={classNames({ "is-active": value == "ALL" })}
      >
        ALL
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "TODO")}
        className={classNames({ "is-active": value === "TODO" })}
      >
        ToDo
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "DONE")}
        className={classNames({ "is-active": value === "DONE" })}
      >
        Done
      </a>
    </div>
  );
};
export default Filter;
