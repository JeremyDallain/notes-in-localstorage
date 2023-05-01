function Button({
  children,
  onClick,
  type = "submit",
  bgColor = "bg-blue-500",
  className = "",
}) {
  const baseClasses = `px-4 py-2 ${bgColor} text-white rounded`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
