import React, { useState } from "react";
import { filterByTitleOrDescription, resetNotes } from "@/redux/slices";
import { useDispatch } from "react-redux";
import {
  SearchBarContainer,
  SearchButton,
  SearchInput,
  SearchIcon,
} from "@/components/search-bar";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query !== "") {
      dispatch(filterByTitleOrDescription({ searchText: query }));
    } else {
      dispatch(resetNotes());
    }
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
  );
}
