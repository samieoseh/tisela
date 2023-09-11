const Container = ({ children, className, ...props }) => {
  return (
    <div className={`px-5 md:px-20 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
