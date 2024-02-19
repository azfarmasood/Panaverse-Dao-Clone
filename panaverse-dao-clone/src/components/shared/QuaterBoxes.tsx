import { FC } from "react";
type Iprops = {
  Header: string;
  Discription: string;
  number: number;
  haveborder?: boolean;
};

const QuaterBoxes: FC<Iprops> = ({
  Header,
  Discription,
  number,
  haveborder = true,
}) => {
  return (
    <div
      className={`group hover:z-10 hover:bg-black flex flex-col justify-center rounded-md sm:flex-1 sm:px-8 px-4 sm:py-14 py-17 relative cursor-pointer duration-2000 ${
        haveborder === true && "border"
      }`}
    >
      <h4 className="font-bold group-hover:text-white text-base sm:text-lg underline duration-2000">
        {Header}
      </h4>
      <p className="mt-2 text-p2 sm:text-15 sm:w-full w-72 group-hover:text-white text-#00616c font-bold duration-2000">
        {Discription}
      </p>
      <div className="absolute -top-8 sm:right-16 right-8 text-gray-200 group-hover:text-#00616c text-170 font-extrabold -z-10 group-hover:translate-x-5 duration-2000">
        {number}
      </div>
    </div>
  );
};

export default QuaterBoxes;
