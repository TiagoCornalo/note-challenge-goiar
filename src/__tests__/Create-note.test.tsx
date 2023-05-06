import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppWrapper } from "@/test-utils";

describe("Create note", () => {
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

  const noteValidMock = {
    title: "Test title",
    type: "Tareas de casa",
    content: "Test content",
  };

  it("renders the create note modal", async () => {
    const addButton = await screen.findByRole("button", {
      name: /Añadir nota/i,
    });
    await userEvent.click(addButton);
    expect(await screen.findByText(/Crear nueva nota/i)).toBeInTheDocument();
  });

  it("adds a note", async () => {
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
    expect(
      await screen.findByText(new RegExp(noteValidMock.title, "i"))
    ).toBeInTheDocument();
  });
});
