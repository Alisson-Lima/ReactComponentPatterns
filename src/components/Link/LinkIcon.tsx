import { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

export default function LinkIcon({ icon: Icon }: Props) {
  return (
    <div className="min-w-16 h-16 bg-slate-200 flex items-center justify-center rounded">
      <Icon size={24} />
    </div>
  );
}
