export const QuizCard = (props) => {
  const { id, name, img, onClick, isSelected, index } = props;

  return (
    <li
      className={`relative box-content border-2 cursor-pointer duration-200 rounded-xl overflow-hidden bg-white hover:opacity-70 ${
        isSelected ? "border-red-300" : "border-gray-300"
      }`}
      id={id}
      onClick={onClick}
    >
      <img
        className="block w-100 h-auto object-cover"
        src={img}
        alt=""
        width={50}
        height={50}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-2">
        <span className="aspect-square self-start text-sm rounded-full bg-gray-400 font-medium text-white p-0.5">
          {index}
        </span>

        <div className="text-center text-sm text-gray-500 font-medium">{name}</div>
      </div>
    </li>
  );
};
