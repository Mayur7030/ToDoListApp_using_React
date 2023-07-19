import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <FontAwesomeIcon
          icon={faCircleXmark}
          color={"red"}
          onClick={() => {
            props.onSelect(props.id);
          }}
        />

        <li>{  props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
