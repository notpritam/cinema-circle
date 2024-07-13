import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PosterImage from "@/public/images/poster.jpeg";

interface MovieComponentProps {
  title: string;
  image: string;
  rating: string;
  genre: string;
  slug: string;
}

function MovieComponent({
  title,
  image,
  rating,
  genre,
  slug,
}: MovieComponentProps) {
  return (
    <Link href={`/movie/${slug}`}>
      <div
        draggable={false}
        className="list flex flex-col gap-2 cursor-pointer select-none"
      >
        <div className="rounded-lg overflow-clip shadow-sm">
          <Image
            src={PosterImage}
            alt="Movie Image"
            className=""
            draggable={false}
          />
          <div className="flex bg-black gap-2 items-center justify-start text-white p-4 py-2">
            <Star className="text-red-500" size={20} />{" "}
            <span className="font-light ">{rating}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="font-light text-showSubtitle">{genre}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieComponent;
