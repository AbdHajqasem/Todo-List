import "./Card.css";
const Card = (prop) => {
  return (
    <>
      <div className="card">
        <h4>{prop.toDo}</h4>
      </div>
    </>
  );
};
export default Card;
