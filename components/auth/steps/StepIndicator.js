const StepIndicator = ({ step, setStep }) => {
  return (
    <div className="flex justify-between mt-4 mb-12">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`flex items-center justify-between ${
            index !== 2 ? "flex-1" : ""
          }`}
        >
          <div
            onClick={() => {
              if (index + 1 <= step) {
                setStep(index + 1);
              }
            }}
            className={`h-8 w-8 rounded-full transition-all ease-in-out cursor-pointer ${
              step === index + 1
                ? "bg-blue-400 shadow-md scale-125"
                : "bg-gray-200"
            } flex items-center justify-center`}
          >
            <p className="text-sm text-white">{index + 1}</p>
          </div>
          {index !== 2 && (
            <div
              className={`h-[2px] flex-1 ${
                step === index + 1 ? "bg-blue-400" : "bg-gray-200"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
