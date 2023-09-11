const Container = ({ children, className, ...props }) => {
  return (
    <div className={`mx-5 md:mx-20 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
