import React from 'react';

const InputForm = ({ handleSubmit, neftRef, setNeftRef }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Enter NEFT Reference Number"
        value={neftRef}
        onChange={(e) => setNeftRef(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-4"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Get Details
      </button>
    </form>
  );
};

export default InputForm;
