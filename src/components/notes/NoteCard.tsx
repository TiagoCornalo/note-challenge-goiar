import { NotesContainer, Pin } from "@/components/notes/notes.styled";
import { Note } from "@/models";
import { TitleStyled, TextStyled } from "@/styled-components";

export default function NoteCard({ title, type, content, date }: Note) {
  return (
    <NotesContainer>
      <TitleStyled>{title}</TitleStyled>
      <TextStyled>{type}</TextStyled>
      <TextStyled>{date}</TextStyled>
      <TextStyled>{content}</TextStyled>
      <Pin />
    </NotesContainer>
  );
}
