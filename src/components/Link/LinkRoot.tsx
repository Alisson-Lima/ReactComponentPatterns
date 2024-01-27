import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LinkRoot({ children }: Props) {
  return (
    <div className="bg-slate-100 rounded-lg p-8 relative border border-slate-200 text-black flex gap-8 w-[848px]">
      {children}
    </div>
  );
}
