"use client";

import GitHub from "../icons/GitHub";
import Google from "../icons/Google";
import Button from "../ui/Button";

export default function Social() {
  return (
    <div className="flex items-center justify-center w-full gap-x-6 ">
      <Button func={() => {}}>
        <Google style="size-6" />
      </Button>
      <Button func={() => {}}>
        <GitHub style="size-6" />
      </Button>
    </div>
  );
}
