// export let Input = ({ iN, id, cN, ph, ...rest }) => {
//   return (
//     <input
//       id={id}
//       placeholder={ph}
//       className="w-50 border-2 text-center rounded-sm h-10"
//       {...rest}
//     />
//   );
// };

import * as React from "react";

const Input = ({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`
        "flex h-12 w-full rounded-md border border-zinc-300 border-input bg-transparent px-3 placeholder:text-xs",
        ${className}`}
      ref={ref}
      {...props}
    />
  );
};
Input.displayName = "Input";

export { Input };
