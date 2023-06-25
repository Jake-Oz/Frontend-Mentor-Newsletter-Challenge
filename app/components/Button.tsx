interface ButtonProps {
  value: string;
  height: string;
  width?: number;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, height }) => {
  return (
    <input
      type="submit"
      value={value}
      onClick={onClick}
      className={`${height} w-full mb-6 bg-black text-white rounded-md cursor-pointer hover:bg-gradient-to-r from-red-300 via-red-500 to-orange-500 hover:drop-shadow-[0_10px_10px_rgba(200,0,0,0.25)]`}
    />
  );
};

export default Button;
