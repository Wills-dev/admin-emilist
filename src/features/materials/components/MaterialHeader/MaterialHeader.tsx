import Title from "@/components/atoms/Title/Title";
import PaymentInfo from "@/components/molecules/PaymentInfo/PaymentInfo";

const MaterialHeader = ({ title, id }: { title: string; id: string }) => {
  return (
    <div className="sm:px-10 px-4 border-b pb-6 space-y-2">
      <Title
        title={title}
        className="sm:text-3xl max-sm:text-2xl font-semibold"
      />
      <PaymentInfo title="Material ID:" value={id} />
    </div>
  );
};

export default MaterialHeader;
