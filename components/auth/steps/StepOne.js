import InputField from "@/components/shared/InputField";
import { useState } from "react";

const StepOne = ({ name, setName, onNext }) => {
  const [errorMessageList, setErrorMessageList] = useState([]);

  const handleNextClick = () => {
    if (name.trim() === "") {
      setErrorMessageList(["We need your full name to create your account."]);
    } else {
      // Proceed to the next step
      onNext();
    }
  };

  return (
    <div>
      <InputField
        label="Full Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errorMessageList && (
        <ul className="flex justify-center">
          {errorMessageList.map((errorMessage, id) => (
            <li key={id} className="text-sm text-red-500 py-2">
              {errorMessage}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
