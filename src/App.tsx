import Layout from "./containers/layout/Layout";
import Modal from "./containers/modal/Modal";
import HomePage from "./pages/home/HomePage";
import useModalStore from "./store/modal-store/modalStore";

function App() {
  const modal = useModalStore();

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        {modal.element}
      </Modal>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
