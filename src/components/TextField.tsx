const Input = (props: Record<string, any>) => {
  const { name, label, handleChange, ...otherProps } = props;

  const inputConfig = {
    ...otherProps,
    type: "text",
  };

  return (
    <>
      <input
        style={{ padding: "20px", borderRadius: "10px", marginBottom: "10px" }}
        onChange={(event) => handleChange(event)}
        placeholder={label}
        {...inputConfig}
        name={name}
      />
      <br />
    </>
  );
};

export default Input;
