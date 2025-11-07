import Button from "@/components/atoms/Button/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ModalProps {
  children: React.ReactNode;
  btnTitle: string;
}

const Modal = ({ btnTitle = "Open", children }: ModalProps) => {
  return (
    <Dialog>
      <div className="flex justify-end">
        <DialogTrigger asChild>
          <Button>{btnTitle}</Button>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-md">{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
