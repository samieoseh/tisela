const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={`w-[90%] md:w-[90%] lg:w-[80%] xl:w-[40%] mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
