const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 mt-8 rounded shadow:sm ${className}`}
  >
    {children}
  </button>
);

export default Button;
