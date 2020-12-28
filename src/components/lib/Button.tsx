type ButtonProps = {
  children: string;
  onClick: () => void;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="border-2 border-gray-400 py-2 px-4 rounded-full hover:bg-gray-400 hover:text-white hover:shadow-xl transition-colors transition-shadows w-max"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
