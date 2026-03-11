'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProductPage() {
     useEffect(() => {
    redirect("/products/car");
  }, []);
    return (
        <div>
            <h1 className="text-2xl font-bold text-blue-600">Product Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint
                libero nam provident, necessitatibus at quos quibusdam ex quo et eveniet
                nesciunt ducimus sunt est adipisci explicabo molestias odit dolore!
            </p>
        </div>
    );
}