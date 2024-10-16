import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-40 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link 
          href='mailto:nmiles13@gmail.com' 
          className="w-20 h-20 rounded-full font-semibold flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
