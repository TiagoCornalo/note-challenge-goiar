import React from "react";
import { InfiniteScrollContainer } from "@/components/infinite-scroll";

type InfiniteScrollProps = {
  children: React.ReactNode;
};

export default function InfiniteScroll({ children }: InfiniteScrollProps) {
  return <InfiniteScrollContainer>{children}</InfiniteScrollContainer>;
}
