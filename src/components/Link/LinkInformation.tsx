import { FiCalendar, FiClock, FiTag } from "react-icons/fi";

type Props = {
  createdAt: string;
  validity: string;
  tags?: string[];
};

export default function LinkInformation({
  createdAt,
  validity,
  tags = [],
}: Props) {
  return (
    <ul className="flex items-center justify-between w-fit gap-10">
      <li className="flex items-center gap-4 font-medium">
        <FiCalendar size={22} /> {createdAt}
      </li>
      <li className="flex items-center gap-4 font-medium">
        <FiClock size={22} /> {validity}
      </li>
      <ul className="flex items-center font-medium gap-2">
        <FiTag size={22} style={{ marginRight: 16 }} />
        {tags ? tags.map((tag) => <li key={tag}>{tag}</li>) : <p>Sem tags</p>}
      </ul>
    </ul>
  );
}
