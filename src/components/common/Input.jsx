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


export let Input = (props) => {
  return (
    <input placeholder={props.ph} id={props.id} {...props} className="w-50 border-2 text-center rounded-sm h-10" />
  );
};
