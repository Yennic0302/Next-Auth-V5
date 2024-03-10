import React from "react";
import BackButton from "./BackButton";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Header from "./Header";
import Social from "./Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <article className=" space-y-4 rounded-md bg-white gap-y-6 p-6 max-w-[400px] w-full ">
      <Header label={headerLabel} />
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </article>
  );
}
