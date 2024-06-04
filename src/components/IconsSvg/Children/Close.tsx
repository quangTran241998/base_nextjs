interface Props extends React.SVGProps<SVGSVGElement> {}

const Close = (props: Props) => {
  const { ...params } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      {...params}
    >
      <path
        d="M18.5332 6.62154L6.51274 18.6011M6.5332 6.60107L18.5127 18.6215"
        stroke="#31302B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;
