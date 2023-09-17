export const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={`w-[90%] md:w-[90%] lg:w-[80%] xl:w-[40%] mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const HeroContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={`w-full pb-8 lg:pb-0 bg-gradient-to-r from-white to-blue-50 backdrop-blur-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const FooterContainer = ({ children, className, ...props }) => {
  return (
    <div className={`w-full bg-gray-800 mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};
