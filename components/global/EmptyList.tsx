function EmptyList({
  heading = "لیستی جهت نمایش وجود ندارد",
}: {
  heading?: string;
}) {
  return <h2 className="text-xl">{heading}</h2>;
}
export default EmptyList;
