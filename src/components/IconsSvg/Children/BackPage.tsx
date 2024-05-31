const BackPage = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      className=" cursor-pointer"
      {...props}
    >
      <path
        stroke="#31302B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 18.94-6-6 6-6"
      />
    </svg>
  );
};

export default BackPage;
