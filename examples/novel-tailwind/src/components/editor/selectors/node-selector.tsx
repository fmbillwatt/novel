import { useState } from "react";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";

export type SelectorItem = {
  name: string;
  value: string;
};

export const NodeSelector = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost">Select Node</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Node Options</div>
      </PopoverContent>
    </Popover>
  );
};
