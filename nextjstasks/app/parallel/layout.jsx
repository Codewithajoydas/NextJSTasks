export default function Layout({ sidebar, components, children }) {
  return (
    <div>
      {sidebar}
      {components}
      {children}
    </div>
  );
}