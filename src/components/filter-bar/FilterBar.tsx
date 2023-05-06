import Select from "react-select";
import { types } from "@/models";
import { filterByNoteType, resetNotes } from "@/redux/slices";
import { useDispatch } from "react-redux";
export default function FilterBar() {
  const dispatch = useDispatch();

  const handleFilter = (option: any) => {
    if (option) {
      dispatch(filterByNoteType({ noteType: option.value }));
    } else {
      dispatch(resetNotes());
    }
  };

  return (
    <Select
      options={types}
      placeholder={"Filtrar por tipo"}
      isClearable
      isSearchable
      onChange={(option) => handleFilter(option)}
    />
  );
}
