import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/redux/store.tsx";
import {
  addNote,
  filterByTitleOrDescription,
  notesReducer,
} from "@/redux/slices";
import { SearchBar } from "@/components/search-bar";

const initialState = {
  notes: [],
  originalNotes: [],
  selectedNote: null,
};

describe("Search note", () => {
  const dispatchMock = jest.fn();

  beforeAll(() => {
    jest.spyOn(store, "dispatch").mockImplementation(dispatchMock);

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the search bar", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call the filterByTitleOrDescription action when the search button is clicked", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchButton = screen.getByTestId("search-button");
    const searchBar = screen.getByPlaceholderText("Search...");

    fireEvent.change(searchBar, { target: { value: "test" } });
    fireEvent.click(searchButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      filterByTitleOrDescription({ searchText: "test" })
    );
  });

  it("should filter notes by title or description when the search button is clicked", async () => {
    const searchText = "test";
    const action = addNote({
      title: searchText,
      content: "test",
      id: "test",
      date: "test",
      type: "test",
    });

    const newState = notesReducer(initialState, action);

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchBar = screen.getByPlaceholderText("Search...");
    const searchButton = screen.getByTestId("search-button");

    fireEvent.change(searchBar, { target: { value: searchText } });
    fireEvent.click(searchButton);

    expect(newState.notes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: expect.stringContaining(searchText) }),
      ])
    );
  });

  it("should call the filterByTitleOrDescription action when the Enter key is pressed", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchBar = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchBar, { target: { value: "test" } });
    fireEvent.keyDown(searchBar, { key: "Enter", code: "Enter" });

    expect(dispatchMock).toHaveBeenCalledWith(
      filterByTitleOrDescription({ searchText: "test" })
    );
  });
});
