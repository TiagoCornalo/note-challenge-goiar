import { Home } from "./pages";
import { Modal } from "@/components/modals";
import { useModalContext } from "@/context";
function App() {
  const { modals } = useModalContext();
  return (
    <>
      {modals?.map((modal) => (
        <Modal key={modal.id} onClose={modal.onClose}>
          {modal.content}
        </Modal>
      ))}
      <Home />
    </>
  );
}

export default App;
