import { Button } from "@/components/buttons";
import { CreateNoteModal } from "@/components/modals/create-note";
import { useModalContext } from "@/context";
import { HomeHeaderStyled } from "@/components/home-header";
import { AlignSelfEnd, RowContainer, TitleStyled } from "@/styled-components";
import { Logo } from "@/components/logo";
import { IoAddSharp } from "react-icons/io5";
export default function HomeHeader() {
  const { addModal, removeModal } = useModalContext();

  return (
    <HomeHeaderStyled>
      <RowContainer>
        <TitleStyled color={"#F1F1F1"} size={"24px"}>
          <Logo />
          Mis notas
        </TitleStyled>
        <AlignSelfEnd>
          <Button
            type={"button"}
            onClick={() =>
              addModal({
                id: "create-note",
                content: <CreateNoteModal />,
                onClose: () => removeModal({ id: "create-note" }),
              })
            }
          >
            <IoAddSharp size={24} />
          </Button>
        </AlignSelfEnd>
      </RowContainer>
    </HomeHeaderStyled>
  );
}
