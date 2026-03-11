"use client";
import { Button } from "@/components/Button";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
 
  return (
    <>
      <Header
        brand={{
          logo: "next.svg",
          title: "Home Page",
        }}
        links={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "About",
            url: "/about",
          },
          {
            name: "Contact",
            url: "/contact",
          },
        ]}
      ></Header>
      <div className="flex flex-col items-center antialiased">
        <h1 className="text-2xl font-bold text-blue-600">
          This is a Home Page
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint
          libero nam provident, necessitatibus at quos quibusdam ex quo et
          eveniet nesciunt ducimus sunt est adipisci explicabo molestias odit
          dolore!
        </p>
        <Button type="secondary" clickfn={() => console.log("this is a alert")}>
          Click Me
        </Button>
      </div>
    </>
  );
}
