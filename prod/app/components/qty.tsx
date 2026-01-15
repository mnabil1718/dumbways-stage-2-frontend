import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Quantity({
  value,
  cb,
}: {
  value: number;
  cb: (val: number) => void;
}) {
  const inc = () => {
    if (value + 1 > 10) return;
    cb(value + 1);
  };

  const dec = () => {
    if (value - 1 < 1) return;
    cb(value - 1);
  };

  return (
    <div className="flex items-center gap-1 w-fit">
      <Button
        onClick={dec}
        variant={"outline"}
        className="cursor-pointer"
        disabled={value === 1}
      >
        -
      </Button>
      <Input className="max-w-12 w-full" value={value} />
      <Button
        onClick={inc}
        variant={"outline"}
        className="cursor-pointer"
        disabled={value === 10}
      >
        +
      </Button>
    </div>
  );
}
