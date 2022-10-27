import Link from "next/link";
import { CESILogo } from "./CESILogo";

export const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex flex-col bg-neutral-800">
        <div
          aria-label="Navigation principale"
          className="inline-flex items-center justify-between w-full px-5 py-2.5"
        >
          <nav className="inline-flex items-center gap-x-10">
            <Link href="/" className="inline-flex items-center gap-x-4">
              <CESILogo
                className={
                  "shrink-0 border w-[38px] h-[38px] bg-primary text-black border-black"
                }
              />
              <span className="text-lg font-bold text-white font-body">Agile Toolbox</span>
            </Link>
          </nav>
        </div>

        
      </div>
    </>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="hidden nav__link md:inline-flex">{children}</a>
    </Link>
  );
};
