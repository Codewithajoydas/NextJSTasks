'use client'

import { useParams } from "next/navigation";

export default function ProductPage() {
    const parms = useParams();
    const slug = parms.id;
    return (
        <div>
            <h1 className="text-2xl font-bold text-blue-600">Showing product of {slug} </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint
                libero nam provident, necessitatibus at quos quibusdam ex quo et eveniet
                nesciunt ducimus sunt est adipisci explicabo molestias odit dolore!
            </p>
        </div>
    );
}