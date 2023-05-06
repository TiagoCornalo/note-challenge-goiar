import { NotesContainer, Pin } from "@/components/notes/notes.styled";
import { Note } from "@/models";
import { TitleStyled, TextStyled } from "@/styled-components";

export default function NoteCard({ title, type, content, date }: Note) {
  return (
    <NotesContainer>
      <TitleStyled margin={"10px 0 0 0"}>{title}</TitleStyled>
      <TextStyled>{type}</TextStyled>
      <TextStyled>{date}</TextStyled>
      <TextStyled>
        {(content ?? "").length > 160
          ? content?.slice(0, 160) + "..."
          : content}
      </TextStyled>
      <Pin />
    </NotesContainer>
  );
}
