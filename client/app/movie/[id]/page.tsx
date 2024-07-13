import React from "react";

function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  return <div>Page</div>;
}

export default Page;
