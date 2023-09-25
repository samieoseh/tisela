import InputField from "@/components/shared/InputField";
import { useState } from "react";

const StepTwo = ({ email, setEmail, onBack, onNext }) => {
  const [errorMessageList, setErrorMessageList] = useState([]);

  const handleNextClick = () => {
    const errors = [];
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    console.log("form");
    if (!emailRegex.test(email)) {
      errors.push();
      setErrorMessageList(["Email must be of this format: test@example.com"]);
    } else {
      // Proceed to the next step
      onNext();
    }

    const handleEnterPress = (e) => {};
  };

  return (
    <div>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <div className="mt-4 flex justify-between">
        <button
          className="bg-white text-blue-500 py-2 px-4 rounded border"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="submit"
          onClick={() => handleNextClick()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
