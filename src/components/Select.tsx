const Select = (props: Record<string, any>) => {
  const { name, label, handleChange, items } = props;
  return (
    <>
      <label htmlFor="cars">{label}</label>
      <br />
      <select
        style={{
          width: "77%",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
        name={name}
        id="cars"
        onChange={(event) => handleChange(event)}
      >
        {items.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
    </>
  );
};

export default Select;
