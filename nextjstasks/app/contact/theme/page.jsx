'use client'
import { useParams, useSearchParams } from "next/navigation";

export default  function ThemePage() {
  const search = useSearchParams();
  const theme = search.get("theme");

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className={`text-2xl font-bold text-blue-600`}>
        Showing {theme} Page
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint
        libero nam provident, necessitatibus at quos quibusdam ex quo et eveniet
        nesciunt ducimus sunt est adipisci explicabo molestias odit dolore!
      </p>
    </div>
  );
};
