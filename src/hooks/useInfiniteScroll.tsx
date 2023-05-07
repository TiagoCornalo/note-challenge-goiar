import { useState, useEffect, useCallback } from "react";

type UseInfiniteScrollArgs = {
  items: any[];
};

export default function useInfiniteScroll({ items }: UseInfiniteScrollArgs) {
  const [hasMore, setHasMore] = useState(true);
  const [visibleData, setVisibleData] = useState(12);
  const [dataLength, setDataLength] = useState(0);
  const [displayedData, setDisplayedData] = useState<any[]>([]);

  useEffect(() => {
    setDataLength(items.length);
  }, [items]);

  useEffect(() => {
    const updatedItems = items.slice(0, visibleData);
    setDisplayedData(updatedItems);
  }, [visibleData, items]);

  const loadMore = useCallback(() => {
    console.log("loadMore");
    if (visibleData >= items.length) {
      setHasMore(false);
      return;
    }
    setVisibleData((prevValue) => prevValue + 12);
  }, [items.length, visibleData]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight && hasMore) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore, hasMore]);

  return { loadMore, displayedData, hasMore, dataLength };
}
