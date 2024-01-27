import { ReactNode } from "react";

type LinkContentProps = {
  children: ReactNode;
  title: string;
  shortlink: string;
  link: string;
};

export default function LinkContent({
  children,
  link,
  title,
  shortlink,
}: LinkContentProps) {
  return (
    <div className="relative w-full">
      <div className="max-w-[600px]">
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        <a
          href="/"
          className="text-xl font-semibold text-blue-800 mb-4 inline-block"
        >
          {shortlink}
        </a>
        <h2 className="text-xl font-semibold mb-11">{link}</h2>
        {children}
      </div>
    </div>
  );
}
