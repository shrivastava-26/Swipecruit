


export let Button = ({ label, onClick, type, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md  py-2 px-5 text-white cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};

