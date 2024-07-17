"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
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
import { X } from "lucide-react";
import Link from "next/link";

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");
  return (
    <div>
      Page
      {movieId}
      <AlertDialogTrigger>
        <Button className="bg-showRed" size={"lg"}>
          Book Tickets
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-sm text-showSubtitle">Movie Title</span>
              <span className="text-lg font-bold">
                Select language and format
              </span>
            </div>
            <AlertDialogCancel className="border-none">
              <X size={20} />
            </AlertDialogCancel>
          </div>

          <AlertDialogDescription>
            <div className="bg-lightGray h-8 flex items-center justify-start">
              HINDI
            </div>
            <div className="flex gap-2 my-4">
              {["2D", "3D", "IMAX 2D", "IMAX 3D", "4DX", "Hindi"].map(
                (item, index) => (
                  <>
                    <div className="bg-white border-[1px] px-2 rounded-[10px]  py-1">
                      <span className="text-showRed">{item}</span>
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
                    <Link href={`/buytickets/${params.id}`}>
                      <div className="bg-white text-showRed border-[1px] px-2 rounded-[10px]  py-1">
                        <span className="">{item}</span>
                      </div>
                    </Link>
                  </>
                )
              )}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter> */}
      </AlertDialogContent>
    </div>
  );
}

export default Page;
