import "./list.scss";
const List = ({ id, title, selected, setSelected }) => {
  return (
    <li
      className={selected === id ? "active" : ""}
      id={id}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default List;
