import { FiLink } from "react-icons/fi";
import { Link } from "./components/Link";

export default function App() {
  return (
    <div className="w-full flex items-center flex-col py-10">
      <h1 className="text-4xl mb-10">React Component Pattern</h1>

      <Link.Root>
        <Link.Icon icon={FiLink} />
        <Link.Content
          title="Meu link"
          link="/meu-link-muito-grande.com"
          shortlink="duxz.io/123456"
        >
          <Link.Information
            createdAt="12-08-2024"
            validity="05-09-2024"
            tags={["minhas", "tags"]}
          />
        </Link.Content>
      </Link.Root>
    </div>
  );
}
