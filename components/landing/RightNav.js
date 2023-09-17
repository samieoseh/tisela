import Link from "next/link";

const RightNav = ({ showNav }) => {
  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <ul className="p-4 lg:p-4">
      <div className="block lg:flex lg:gap-4">
        <Link
          href="/login"
          className="block w-auto py-1 px-4 text-center  border rounded text-[#000]  text-sm mb-4 lg:mb-0"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="block w-auto py-1 px-4 text-center bg-[#000] border rounded text-[#fff] text-sm mb-4 lg:mb-0"
        >
          Sign Up
        </Link>
      </div>
    </ul>
  );
};

export default RightNav;
