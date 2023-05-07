import { render, cleanup } from "@testing-library/react";
import { NoteCard } from "@/components/notes";
describe("NoteCard component", () => {
  afterEach(() => {
    cleanup();
  });
  const note = {
    id: 1,
    title: "Test note",
    type: "Test type",
    content: "Test content",
    date: "2023-05-06",
  };

  it("should render the note title", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.title)).toBeInTheDocument();
  });

  it("should render the note type", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.type)).toBeInTheDocument();
  });

  it("should render the note date", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.date)).toBeInTheDocument();
  });

  it("should render the note content", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.content)).toBeInTheDocument();
  });
});
