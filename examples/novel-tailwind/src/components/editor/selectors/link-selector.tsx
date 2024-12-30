import { useState } from "react";
import { Button } from "../../ui/button";
import {
  PopoverContent,
  Popover,
  PopoverTrigger,
} from "../../ui/popover";

export const LinkSelector = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost">Select Link</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Link Options</div>
      </PopoverContent>
    </Popover>
  );
};
