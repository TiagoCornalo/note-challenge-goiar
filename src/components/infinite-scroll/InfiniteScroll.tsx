import { InfiniteScrollContainer } from "@/components/infinite-scroll";
import { ReactNode } from "react";

type InfiniteScrollProps = {
  children: ReactNode;
};
export default function InfiniteScroll({ children }: InfiniteScrollProps) {
  return <InfiniteScrollContainer>{children}</InfiniteScrollContainer>;
}
