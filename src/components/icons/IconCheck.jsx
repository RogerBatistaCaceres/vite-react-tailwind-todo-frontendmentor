const IconCheck = ({ fill = "none", ...props }) => {
  return (
    <svg
      {...props}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9"
      stroke="#FFF"
      strokeWidth="2"
    >
      <path d="M1 4.304L3.696 7l6-6" />
    </svg>
  );
};
export default IconCheck;
