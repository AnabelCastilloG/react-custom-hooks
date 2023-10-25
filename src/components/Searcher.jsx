const Searcher = ({ inputValue, handleChange }) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Nombre pokemon..."
    />
  );
};

export default Searcher;
