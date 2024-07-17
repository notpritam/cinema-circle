"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");
  return (
    <div>
      Page
      {movieId}
    </div>
  );
}

export default Page;
