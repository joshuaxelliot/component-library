
const Button = ({ size, color, disabled, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-2xl ${size} ${color} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
