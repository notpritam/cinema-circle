import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import MTicket from "@/public/images/phone.svg";
import WishList from "@/public/images/wishlist.svg";
import Info from "@/public/images/info.svg";
import Food from "@/public/images/food.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page({ params }: { params: { id: string } }) {
  const availableShows = [];
  return (
    <div className="w-full">
      <div className="w-full pt-[30px] pb-[15px] border-showBorder border-b-[1px]">
        <div className="flex container flex-col gap-1">
          <span className="text-[36px]">Hindustani 2 (4DX) - Hindi</span>
          <div className="flex gap-4">
            {["UA", "Action", "Drama"].map((genre) => (
              <span
                key={genre}
                className="text-xs rounded-full border-[1px] border-showBorder px-2 py-1 text-gray-400"
              >
                {" "}
                {genre}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full py-1">
        <div className="container w-full py-[6px] pl-[62px] flex justify-between">
          <div className="flex gap-4">
            {[
              {
                day: "wed",
                date: "12",
                month: "oct",
              },
              {
                day: "thu",
                date: "13",
                month: "oct",
              },
              {
                day: "fri",
                date: "14",
                month: "oct",
              },
              {
                day: "sat",
                date: "15",
                month: "oct",
              },
              {
                day: "sun",
                date: "16",
                month: "oct",
              },
            ].map((show) => (
              <div
                key={show.day}
                className="font-roboto flex flex-col min-w-[50px] min-h-[52px] bg-showRed rounded-[10px] items-center justify-center p-[5px] gap-0 text-white capitalize text-[10px] "
              >
                <span className="leading-[12px] m-0 p-0">{show.day}</span>
                <span className="text-[16px] font-semibold leading-[18px] m-0 p-0">
                  {show.date}
                </span>
                <span className="leading-[12px] m-0 p-0">{show.month}</span>
              </div>
            ))}
          </div>

          <div>test</div>
        </div>
      </div>
      <div className="w-full py-8 bg-lightGray min-h-[80vh] flex flex-col gap-4 justify-start items-center px-[2rem]">
        <div className="bg-white min-h-[500px] rounded-lg overflow-clip container p-0 mx-[2rem] w-full  ">
          <div className="w-full  bg-white flex flex-col border-b-[1px] border-showBorder px-4">
            <div className="flex uppercase gap-4 w-full justify-end py-2 ">
              {["Available", "Fast Filling", "Solodut"].map((status) => (
                <>
                  <div className="flex gap-[8px]  items-center text-[10px]">
                    <div
                      className={cn(
                        "min-h-[8px] min-w-[8px] rounded-full ",
                        status === "Available"
                          ? "bg-green-500"
                          : status === "Fast Filling"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      )}
                    ></div>
                    <span>{status}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            {[
              {
                time: "10:00 AM",
                available: true,
              },
              {
                time: "01:00 PM",
                available: false,
              },
              {
                time: "04:00 PM",
                available: true,
              },
            ].map((show, index) => (
              <div
                key={index}
                className="py-[13px] px-[20px] flex gap-4 items-center hover:border-l-[4px] hover:border-showRed hover:bg-lightGray transition-all duration-150 ease-in-out"
              >
                <div>
                  <Image src={WishList} alt="WishList" width={15} height={15} />
                </div>

                <div className="flex flex-col h-full gap-2">
                  <div className="flex gap-4 text-[12px] font-roboto font-semibold">
                    <span>Cinepolis: Viviana Mall, Thane</span>

                    <div className="flex gap-1 items-center text-showSubtitle">
                      <Image src={Info} alt="WishList" width={12} height={12} />
                      <span className="text-[10px]">Info</span>
                    </div>
                  </div>
                  <div className="flex gap-4  items-center">
                    <div className="text-green-400 flex gap-2 text-[12px] items-center">
                      <Image
                        src={MTicket}
                        alt="WishList"
                        width={22}
                        height={22}
                      />
                      <span>M-Ticket</span>
                    </div>
                    <div className="text-yellow-500 flex gap-2 text-[12px] items-center">
                      <Image src={Food} alt="WishList" width={22} height={22} />
                      <span>Food & Beverage</span>
                    </div>
                  </div>
                </div>
                <div className="ml-8 flex flex-col gap-1 items-center justify-center">
                  <Link
                    href={{
                      pathname: `/buytickets/${params.id}/seating`,
                      query: {
                        id: params.id,
                      },
                    }}
                  >
                    <Button className="bg-transparent border-[1px] border-showBorder text-green-500 text-[12px] font-light font-roboto">
                      {show.time}
                      4DX
                    </Button>
                  </Link>
                  <div className="flex gap-[8px] text-showSubtitle  items-center text-[10px]">
                    <div
                      className={cn(
                        "min-h-[8px] min-w-[8px] rounded-full ",
                        "bg-yellow-500"
                      )}
                    ></div>
                    <span>Cancellation Available </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container bg-white rounded-lg text-[12px] text-showSubtitle">
          <div className="py-4 px-6">
            <nav className="flex">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span>→</span>
                </li>
                <li>
                  <a href="/movies">Movies</a>
                </li>
                <li>
                  <span>→</span>
                </li>
                <li>
                  <a href={`/movies/${params.id}`}>Movie Details</a>
                </li>
                <li>
                  <span>→</span>
                </li>
                <li>
                  <span>Tickets</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
