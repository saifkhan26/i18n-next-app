"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n} from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="">
      <p>Locale switcher:</p>
      <ul className="flex gap-4">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className="my-4">
              <Link href={redirectedPathName(locale)} className="bg-slate-300 text-slate-900 px-4 py-1 rounded-sm">{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
