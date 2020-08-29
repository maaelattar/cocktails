import React from "react";
import AppTitle from "../ui/AppTitle";
import AppLink from "../ui/AppLink";

export default function Error() {
  return (
    <div className="flex flex-col">
      <AppTitle title="oops, it's a dead end" />
      <AppLink name="back home" destination="/" />
    </div>
  );
}
