export const TableCell = ({
  upperText,
  lowerText,
  icon,
}: {
  upperText: string;
  lowerText: string;
  icon?: string;
}) => {
  return (
    <div className="flex-col">
      <div className="text-white">{upperText}</div>
      <div>{lowerText}</div>
    </div>
  );
};
