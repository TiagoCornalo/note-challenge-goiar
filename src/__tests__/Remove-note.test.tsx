import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppWrapper } from "@/test-utils";

const noteValidMock = {
  id: "1",
  title: "Test title",
  type: "Tareas de casa",
  content: "Test content",
  date: "2021-08-01",
};

describe("Remove note", () => {
  beforeAll(() => {
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

  beforeEach(() => {
    render(<AppWrapper />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should remove a note", async () => {
    const addButton = await screen.findByRole("button", {
      name: /Añadir nota/i,
    });
    await userEvent.click(addButton);
    const titleInput = await screen.findByPlaceholderText(/título de la nota/i);
    const contentInput = await screen.findByPlaceholderText(/contenido/i);
    const submitButton = await screen.findByRole("button", {
      name: /Crear nota/i,
    });
    fireEvent.change(titleInput, { target: { value: noteValidMock.title } });
    const selectInput = screen.getByRole("combobox", {
      name: /Selecciona un tipo de nota/i,
    });
    await userEvent.click(selectInput);
    const optionToSelect = screen.getByText(noteValidMock.type);
    await userEvent.click(optionToSelect);
    fireEvent.change(contentInput, {
      target: { value: noteValidMock.content },
    });
    fireEvent.click(submitButton);
    const NoteCard = await screen.findByText(
      new RegExp(noteValidMock.title, "i")
    );
    await userEvent.click(NoteCard);

    expect(await screen.findByTestId("delete-button")).toBeInTheDocument();
    const deleteButton = await screen.findByTestId("delete-button");
    await userEvent.click(deleteButton);
    expect(NoteCard).not.toBeInTheDocument();
  });
});
