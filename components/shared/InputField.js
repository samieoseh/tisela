const InputField = ({ label, type, value, onChange }) => (
  <div className="flex flex-col">
    <label className="py-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="px-4 py-2 outline-none rounded border w-full border-gray-300 focus:border-blue-500 focus:shadow-sm"
    />
  </div>
);

export default InputField;
