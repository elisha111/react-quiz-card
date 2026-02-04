export const QuizCard = (props) => {
  const { id, name, img } = props;

  return (
    <li className="quiz-item">
      <input 
        className="quiz-item__checkbox" 
        id={id} 
        type="checkbox"
      />
      <label className="quiz-item__label" htmlFor={id}>
        <img src={img} alt="" width={50} height={50} />
        {name}
      </label>
    </li>
  );
};
