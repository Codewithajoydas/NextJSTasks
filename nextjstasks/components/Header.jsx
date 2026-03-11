import Link from "next/link";
import "../components/style/css/Header.css";

/**
 * @typedef {{name: string, url: string}} Link
 */

/**
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {{logo: string, title: string}} props.brand
 * @param {React.CSSProperties} [props.styles]
 * @param {Link[]} [props.links]
 * @returns
 */

export default function Header({
  brand: { logo, title },
  children,
  styles,
  links,
  ...props
}) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={title} />
        <h1>{title}</h1>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
