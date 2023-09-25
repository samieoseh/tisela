import InputField from "@/components/shared/InputField";
import { apiState } from "@/lib/constants";
import { useState } from "react";

const StepThree = ({ password, setPassword, status, onBack, onNext }) => {
  const [errorMessageList, setErrorMessageList] = useState([]);

  const handleNextClick = () => {
    console.log(password < 8, password);
    if (password.length < 8) {
      setErrorMessageList(["Password must be greater than 8 characters"]);
    } else {
      // Proceed to the next step
      onNext();
    }
  };

  return (
    <div>
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
            status === apiState.LOADING ? "opacity-50" : "opacity:0"
          }`}
          type="submit"
          onClick={() => handleNextClick()}
        >
          {status === apiState.LOADING ? "Signing up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default StepThree;
