/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ text }: any) => {
  return (
    <button className="relative px-5 py-2 font-medium text-white group w-48 h-11">
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gray-500 group-hover:bg-gray-700 group-hover:skew-x-12"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gray-700 group-hover:bg-gray-500 group-hover:-skew-x-12"></span>
      <span className="absolute bottom-0 left-0 hidden w-14 h-28 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-gray-600 -rotate-12"></span>
      <span className="absolute bottom-0 right-0 hidden w-14 h-28 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-gray-400 -rotate-12"></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button;
