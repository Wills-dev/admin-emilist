import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmActionProps {
  onClick: () => void;
  description: string;
  title?: string;
  buttonTitle: string;
  buttonStyle?: string;
}

const ConfirmAction = ({
  onClick,
  description,
  title = "Are you absolutely sure?",
  buttonTitle,
  buttonStyle = "bg-green-500 hover:bg-green-600 text-white",
}: ConfirmActionProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={`px-5 h-10 rounded-lg transition-all duration-300 cursor-pointer ${buttonStyle}`}
      >
        {buttonTitle}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmAction;
