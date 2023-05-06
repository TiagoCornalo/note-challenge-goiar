import { useState, useEffect } from "react";

export default function useInfiniteScroll(items: any[]) {
  const [hasMore, setHasMore] = useState(true);
  const [visibleData, setVisibleData] = useState(6);
  const [dataLength, setDataLength] = useState(0);
  const [displayedData, setDisplayedData] = useState<any[]>([]);

  useEffect(() => {
    setDataLength(items.length);
  }, [items]);

  useEffect(() => {
    /*const updatedItems = items.slice(0, visibleData);*/
    setDisplayedData(items);
  }, [visibleData, items]);

  const loadMore = () => {
    console.log("loadMore");
    if (visibleData >= items.length) {
      setHasMore(false);
      return;
    }
    setVisibleData((prevValue) => prevValue + 6);
  };

  return { loadMore, displayedData, hasMore, dataLength };
}
