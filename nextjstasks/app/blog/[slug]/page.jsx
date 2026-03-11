'use client';
import { useParams } from "next/navigation";

export default function BlogSlug() {
    const parms = useParams();
    const { slug } = parms;
    return (
        <div>
            <h1 className="text-2xl font-bold text-blue-600">Showing {slug} Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint
                libero nam provident, necessitatibus at quos quibusdam ex quo et eveniet
                nesciunt ducimus sunt est adipisci explicabo molestias odit dolore!
            </p>
        </div>
    );
}