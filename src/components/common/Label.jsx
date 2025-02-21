export let Label = ({ label, htmlFor }) => {

  return (
    <label
      htmlFor={htmlFor}
      className="block w-50 font-medium mb-1 "
    >
      {label}
    </label>
  );

};
