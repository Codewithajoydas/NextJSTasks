"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Application Error</h1>

      <p className="text-gray-500 mt-2">
        Something went wrong while loading this page.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-black text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}
