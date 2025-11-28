"use client";

import Link from "next/link";
import {usePathname, useParams} from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const {locale} = useParams();

  const path = pathname.replace(`/${locale}`, "");

  return (
    <div className="flex gap-3">
      <Link href={`/es${path}`}>ES</Link>
      <Link href={`/en${path}`}>EN</Link>
    </div>
  );
}
