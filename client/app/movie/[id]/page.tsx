import { Button } from "@/components/ui/button";
import { Cross, Share, Star, ThumbsDown, ThumbsUp, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import PosterImage from "@/public/images/poster.jpeg";
import SectionTitle from "@/components/SectionTitle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MovieComponent from "@/components/MovieComponent";

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
              <AlertDialogTrigger>
                <Button className="bg-showRed" size={"lg"}>
                  Book Tickets
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-sm text-showSubtitle">
                        Movie Title
                      </span>
                      <span className="text-lg font-bold">
                        Select language and format
                      </span>
                    </div>
                    <X size={20} />
                  </div>

                  <AlertDialogDescription>
                    <div className="bg-lightGray h-8 flex items-center justify-start">
                      HINDI
                    </div>
                    <div className="flex gap-2 my-4">
                      {["2D", "3D", "IMAX 2D", "IMAX 3D", "4DX", "Hindi"].map(
                        (item, index) => (
                          <>
                            <div className="bg-white border-[1px] px-2 rounded-sm  py-1">
                              <span className="text-black">{item}</span>
                            </div>
                          </>
                        )
                      )}
                    </div>
                    <div className="bg-lightGray h-8 flex items-center justify-start">
                      ENGLISH
                    </div>
                    <div className="flex gap-2 my-4">
                      {["2D", "3D", "IMAX 2D", "IMAX 3D", "4DX", "Hindi"].map(
                        (item, index) => (
                          <>
                            <div className="bg-white border-[1px] px-2 rounded-sm  py-1">
                              <span className="text-black">{item}</span>
                            </div>
                          </>
                        )
                      )}
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </div>
          </div>
          <Button>
            <Share size={20} />
            Share
          </Button>
        </div>
      </div>

      <div className="w-full">
        <div className=" container ">
          <div className="max-w-[calc(100%-314px)] flex flex-col">
            <div className="flex flex-col gap-4 border-b-[1px] border-showBorder py-9 ">
              <span className="text-xl font-semibold">About the movie</span>
              <p>
                In this sequel to the 1996 film Hindustani, Kamal Hassan
                reprises his role as Senapathy, an ex-freedom fighter turned
                vigilante who fights against corruption. Senapathy returns to
                the country to aid a young man who has been exposing corrupt
                politicians in the country through videos on the internet.
              </p>
            </div>

            <div className="flex flex-col py-9 border-b-[1px] border-showBorder">
              <span className="text-xl font-semibold">Cast</span>

              <div className="normal-scroll gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    className="flex flex-col gap-2 items-center py-2 "
                    key={index}
                  >
                    <div className="rounded-full max-h-[120px] max-w-[120px] min-h-[120px] min-w-[120px]  overflow-clip shadow-sm">
                      <Image
                        src={PosterImage}
                        alt="Movie Image"
                        className="bg-cover h-full w-full"
                        draggable={false}
                      />
                    </div>
                    <div>
                      <h3 className=" font-semibold">Actor Name</h3>
                      <span className="font-light text-showSubtitle">
                        Role Name
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col py-9 border-b-[1px] border-showBorder">
              <span className="text-xl font-semibold">Crew</span>

              <div className="normal-scroll gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    className="flex flex-col gap-2 items-center py-2 "
                    key={index}
                  >
                    <div className="rounded-full max-h-[120px] max-w-[120px] min-h-[120px] min-w-[120px]  overflow-clip shadow-sm">
                      <Image
                        src={PosterImage}
                        alt="Movie Image"
                        className="bg-cover h-full w-full"
                        draggable={false}
                      />
                    </div>
                    <div>
                      <h3 className=" font-semibold">Actor Name</h3>
                      <span className="font-light text-showSubtitle">
                        Role Name
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col py-9 border-b-[1px] border-showBorder">
              <SectionTitle
                title="Top Reviews"
                link="/reviews/1"
                linkText="1.7K Reviews"
              />

              <div className="normal-scroll gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                  <>
                    <Card key={index} className="min-w-[446px] w-[446px]">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Username</span>
                          </div>
                          <div className="flex gap-1">
                            <Star className="text-red-500" size={20} />
                            <span className="font-light ">5.7/10</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-4">
                          In this sequel to the 1996 film Hindustani, Kamal
                          Hassan reprises his role as Senapathy, an ex-freedom
                          fighter turned vigilante who fights against
                          corruption. Senapathy returns to the country to aid
                          a...
                        </p>
                      </CardContent>
                      <CardFooter className="w-full">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex gap-3 items-center ">
                            <div className="flex gap-1">
                              <ThumbsUp size={20} />
                              <span>1.7K Likes</span>
                            </div>
                            <div className="flex gap-1">
                              <ThumbsDown size={20} />
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <span className=" text-showSubtitle">
                              1 days ago
                            </span>
                            <Share size={20} />
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </>
                ))}
              </div>
            </div>

            <div className="flex flex-col py-9 border-b-[1px] border-showBorder">
              <SectionTitle
                title="You might also like"
                link="/reviews/1"
                linkText="View All"
              />

              <div className="normal-scroll gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <>
                    <MovieComponent
                      key={index}
                      genre="Action/Adventure/Sci-Fi"
                      image={"/images/poster.jpeg"}
                      rating="9.5/10 3.2K Votes"
                      slug="1"
                      title="Movie Title"
                    />
                  </>
                ))}
              </div>
            </div>

            {/* Current Main Content */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
