export const QuizCard = (props) => {
  const { id, name, img, onClick } = props;

  return (
    <li className="quiz-item" id={id} onClick={onClick}>
      <img src={img} alt="" width={50} height={50} />
      <div>
        {name}
      </div>
    </li>
  );
};
