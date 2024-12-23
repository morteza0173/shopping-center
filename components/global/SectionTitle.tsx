import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3xl font-medium my-8">{text}</h2>
      <Separator />
    </div>
  );
}
export default SectionTitle;
