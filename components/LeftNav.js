import Link from "next/link";
import { links } from "@/lib/constants";

const LeftNav = () => {
  return (
    <ul className="lg:flex lg:items-center lg:gap-x-8">
      {links.map((link, id) => (
        <li key={id} className="p-4 lg:p-0">
          <Link href={link.href} className="text-sm">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LeftNav;
