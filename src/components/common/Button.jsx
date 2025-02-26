// export let Button = ({ label, onClick, type, className = "" }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`rounded-md  py-2 px-5 text-white cursor-pointer ${className}`}
//     >
//       {label}
//     </button>
//   );
// };

const Button = ({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm h-11 cursor-pointer ${className}`}
      ref={ref}
      {...props}
    />
  );
};

export { Button };
