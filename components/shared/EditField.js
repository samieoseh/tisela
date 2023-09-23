const EditField = ({ label, type, value, onChange, onClick }) => {
  return (
    <div className="flex flex-col border rounded p-4">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-sm"
        value={value}
      />
      <div className="flex justify-end">
        <button
          className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
          onClick={onClick}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditField;
