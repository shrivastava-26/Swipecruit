
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
