import { useAppSelector } from "@/app/store/store";
import TestModal from "@/features/scratch/testModal";

export default function ModalManager() {
  const modalLookup = {
    TestModal,
  };

  const { type, data, open } = useAppSelector((state) => state.modals);

  let renderedModal;

  if (open && type) {
    const ModalComponent = (modalLookup as any)[type];
    renderedModal = <ModalComponent data={data} />;
  }

  return <span>{renderedModal}</span>;
}
