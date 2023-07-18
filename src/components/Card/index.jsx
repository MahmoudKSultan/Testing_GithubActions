
export const Card = ({ children, className, ...rest }) => {
  const cardClassName = `bg-white p-4 rounded-lg shadow-sm ${className ?? ""}`;

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
