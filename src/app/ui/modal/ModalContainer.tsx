"use client";

import { Dialog, DialogTrigger } from "src/components/ui/dialog";
import { useModalContext } from "src/hooks/ContextGuard";

const ModalContainer = () => {
  const { state, modalRef } = useModalContext();

  return (
    <Dialog>
      <DialogTrigger ref={modalRef} />

      {state.state}
    </Dialog>
  );
};

export default ModalContainer;
