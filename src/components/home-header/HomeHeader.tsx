import { Button } from "@/components/buttons";
import { CreateNoteModal } from "@/components/modals/create-note";
import { useModalContext } from "@/context";
import {
  HomeHeaderStyled,
  SearchAndFilterContainer,
} from "@/components/home-header";
import { AlignSelfEnd, RowContainer, TitleStyled } from "@/styled-components";
import { Logo } from "@/components/logo";
import { IoAddSharp } from "react-icons/io5";
import { SearchBar } from "@/components/search-bar";
import { FilterBar } from "@/components/filter-bar";
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
      <SearchAndFilterContainer>
        <SearchBar />
        <FilterBar />
      </SearchAndFilterContainer>
    </HomeHeaderStyled>
  );
}
