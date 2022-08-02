const UndefinedIcon = ({ width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-question-mark"
    width={50}
    height={50}
    viewBox="0 0 21 21"
    strokeWidth="2"
    stroke="darkblue"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
    <line x1={12} y1={19} x2={12} y2="19.01"></line>
  </svg>
);

export default UndefinedIcon;
