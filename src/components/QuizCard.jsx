export const QuizCard = (props) => {
  const { id, name, img, onClick, isSelected } = props;

  return (
    <li
      className={`box-content border-2 cursor-pointer duration-200 hover:opacity-70 ${
        isSelected ? "border-red-500" : "border-gray-300"
      }`}
      id={id}
      onClick={onClick}
    >
      <img
        className="w-100 block object-cover h-auto"
        src={img}
        alt=""
        width={50}
        height={50}
      />
      <div className="text-sm p-1 text-gray-500">{name}</div>
    </li>
  );
};
