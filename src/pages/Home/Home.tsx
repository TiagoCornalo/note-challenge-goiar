import { LayoutStyled } from "@/styled-components";
import { InfiniteScroll } from "@/components/infinite-scroll";

export default function Home() {
  return (
    <LayoutStyled>
      <InfiniteScroll />
    </LayoutStyled>
  );
}
