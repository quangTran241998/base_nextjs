import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  classNameRoot?: string;
}

// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       width: "100%",
//       marginLeft: "10%",
//       marginRight: "10%",
//       maxWidth: "1400px",
//       [theme.breakpoints.only("lg")]: {
//         marginRight: "5%",
//         marginLeft: "5%",
//       },
//       [theme.breakpoints.only("md")]: {
//         marginRight: "3%",
//         marginLeft: "3%",
//       },
//       [theme.breakpoints.only("xs")]: {
//         width: "100%",
//         padding: "0 16px",
//         margin: "0",
//       },
//     },
//   };
// });

const Container = ({ children, className, classNameRoot }: Props) => {
  const classContainer =
    "w-full m-0 px-4 md:mr-[3%] md:ml-[3%] md:mr-[5%] md:ml-[5%] xl:mr-[10%] xl:ml-[10%]  xl:max-w-[1400px]";
  return (
    <div className={`${classNameRoot} flex justify-center`}>
      <div className={`${classContainer} ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
