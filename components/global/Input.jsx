import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  classList = "",
}) => {
  return (
    <input
      className={`w-full border-border rounded-xl hover:border-neutral-600 focus:border-neutral-600 text-neutral-800 focus:outline-none focus:ring-0 ${classList}`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  classList: PropTypes.string,
};

export default Input;
