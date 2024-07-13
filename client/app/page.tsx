import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import BannerImage from "@/public/images/posters/banner.jpg";
import LivePoster from "@/public/images/posters/live.jpg";
import { Star } from "lucide-react";
import Link from "next/link";
import MovieComponent from "@/components/MovieComponent";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-8 bg-lightGray">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title="Recommended Movies"
            link="/movies"
            linkText="View All"
          />
          <div className="lists">
            {Array.from({ length: 10 }).map((_, index) => (
              <MovieComponent
                key={index}
                genre="Action/Adventure/Sci-Fi"
                image={"/images/poster.jpeg"}
                rating="9.5/10 3.2K Votes"
                slug="1"
                title="Movie Title"
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-clip">
          <Image src={BannerImage} alt="Banner Image" draggable={false} />
        </div>

        <div className="flex gap-4 flex-col">
          <SectionTitle title="The Best of Live Events" />

          <div className="lists">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                className="rounded-xl group shadow-sm hover:shadow-2xl hover:border-[1px] border-gray-200 transition-all duration-150 ease-in-out overflow-clip cursor-pointer"
                key={index}
              >
                <Image
                  src={LivePoster}
                  alt="Movie Image"
                  className="group-hover:scale-110 transition-all duration-200 ease-in-out"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main COntainer */}
      </div>
    </main>
  );
}
