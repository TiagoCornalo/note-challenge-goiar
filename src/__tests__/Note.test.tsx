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

  it("renders the note title", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.title)).toBeInTheDocument();
  });

  it("renders the note type", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.type)).toBeInTheDocument();
  });

  it("renders the note date", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.date)).toBeInTheDocument();
  });

  it("renders the note content", () => {
    const { getByText } = render(<NoteCard {...note} />);
    expect(getByText(note.content)).toBeInTheDocument();
  });
});
