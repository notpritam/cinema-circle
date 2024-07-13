import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-lightGray">
      <div className="container ">
        <SectionTitle
          title="Recommended Movies"
          link="/movies"
          linkText="View All"
        />
      </div>
    </main>
  );
}
