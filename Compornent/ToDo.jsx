import classNames from "classnames";
import "bulma/css/bulma.css";

export const ToDo = (props) => {
  const [todo, onCheck] = props;
  const handleChange = () => {
    onCheck(todo);
  };
  return (
    <label className="panel-block">
      <input type="checkbox" checked={todo.done} onChange={handleChange} />
      <span className={classNames({ "has-text-grey-light": todo.done })}>
        {todo.done}
      </span>
    </label>
  );
};
export default ToDo;
