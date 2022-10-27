import { formatDistance } from "date-fns";
import fr from "date-fns/locale/fr/index.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import { CESILogo } from "./CESILogo";
import { useLayout } from "./Layout";

export const Navbar = () => {
  const [lastSavedAt, setLastSavedAt] = useState(undefined);
  const { setComponents } = useLayout();

  useEffect(() => {
    const lastSavedAt = localStorage.getItem("lastSavedAt");
    if (lastSavedAt) {
      setLastSavedAt(lastSavedAt);
    }
  });

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
              <span className="text-lg font-bold text-white font-body">
                Agile Toolbox
              </span>
            </Link>
          </nav>
          <span className="inline-flex items-center">
            <span className="inline-flex items-center text-sm text-neutral-300 gap-x-2">
              <BiSave className="inline-block w-5 h-5  stroke-[0.4]" />
              {lastSavedAt
                ? `sauvegardé ${formatDistance(
                    new Date(lastSavedAt),
                    new Date(),
                    { addSuffix: true, locale: fr }
                  )}`
                : "non sauvegardé"}
            </span>
            {lastSavedAt && (
              <button
                className="ml-2 text-xs duration-200 text-neutral-300 hover:text-red-200"
                onClick={() => {
                  localStorage.setItem("lastSavedAt", "undefined");
                  setLastSavedAt(undefined);
                  localStorage.setItem("components", "[]");
                  setComponents([]);
                }}
              >
                &bull; Supprimer
              </button>
            )}
          </span>
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
