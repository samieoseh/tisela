import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon, title, description, btnText, btnHref }) => {
  return (
    <div className="border border-gray-300 mt-4 mx-12 p-4 max-w-xs rounded flex flex-col items-start justify-center shadow-sm">
      <Image src={icon} height={30} width={30} alt="icon" />
      <h4 className="py-2">{title}</h4>
      <p className="text-xs text-gray-500">{description}</p>
      <Link
        href={btnHref}
        className="text-sm mt-4 flex items-center text-blue-500"
      >
        {btnText}

        <ArrowRight />
      </Link>
    </div>
  );
};

export default FeatureCard;
