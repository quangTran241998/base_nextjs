"use client";

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <div className="text-red-500" onClick={() => console.log("123")}>
      My Post: {params.locale}
    </div>
  );
}
