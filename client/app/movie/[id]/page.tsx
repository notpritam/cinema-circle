import { Button } from "@/components/ui/button";
import { Share, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import PosterImage from "@/public/images/poster.jpeg";

function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <>
      <div className="w-full bg-[#1a1a1a] text-white ">
        <div className="container flex justify-between gradient-image min-h-[480px] py-8 ">
          <div className="flex gap-6">
            <div className="rounded-lg overflow-clip shadow-sm">
              <Image
                src={PosterImage}
                alt="Movie Image"
                className=""
                draggable={false}
              />
              <div className="flex items-center justify-center bg-black gap-2  text-white p-4 py-2">
                <span className="font-light ">In Cinemas</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              <h3 className="text-4xl font-semibold">Movie Title</h3>
              <div className="px-4 w-full py-2 rounded-lg overflow-clip bg-gray-500 flex justify-between items-center">
                <div className="flex gap-4">
                  <Star className="text-red-500" size={20} />
                  <span className="font-light ">5.7/10 3.2K Votes</span>
                </div>
                <Button>Rate Now</Button>
              </div>

              <div className="flex gap-2">
                {["2D, 3D, IMAX 2D, IMAX 3D, 4DX", "Hindi"].map(
                  (item, index) => (
                    <>
                      <div className="bg-white px-2 rounded-sm shadow-md py-1">
                        <span className="text-black">{item}</span>
                      </div>
                    </>
                  )
                )}
              </div>

              <div className="">
                3h • Action , Drama , Thriller • UA • 12 Jul, 2024
              </div>

              <Button className="bg-showRed" size={"lg"}>
                Book Tickets
              </Button>
            </div>
          </div>
          <Button>
            <Share size={20} />
            Share
          </Button>
        </div>
      </div>

      <div className="w-full py-8">
        <div className=" container ">
          <div className="max-w-[calc(100%-314px)] flex flex-col">
            <div className="flex flex-col gap-4 ">
              <span className="text-xl font-semibold">About the movie</span>
              <p>
                In this sequel to the 1996 film Hindustani, Kamal Hassan
                reprises his role as Senapathy, an ex-freedom fighter turned
                vigilante who fights against corruption. Senapathy returns to
                the country to aid a young man who has been exposing corrupt
                politicians in the country through videos on the internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
