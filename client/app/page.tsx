import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import PosterImage from "@/public/images/poster.jpeg";
import BannerImage from "@/public/images/posters/banner.jpg";
import LivePoster from "@/public/images/posters/live.jpg";
import { Star } from "lucide-react";
import Link from "next/link";

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
              <Link href={`/movie/${index}`} key={index}>
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
                      <span className="font-light ">5.7/10 3.2K Votes</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Movie Title</h3>
                    <span className="font-light text-showSubtitle">
                      Action/Drama/Thriller
                    </span>
                  </div>
                </div>
              </Link>
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
