import { Button } from "@/shadcn/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";

function Homepage() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-end p-3">
            <Button style={{ color: "red" }}>Add Expense</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add a Expense</DialogTitle>
            <DialogDescription className="text-orange-400">
              Keep your expenses less!
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="expense-name">Expense Name</Label>
              <Input id="expense-name" defaultValue="" />
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" defaultValue="" />
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" defaultValue="" />
            </div>
            {/* <Button type="submit" size="sm" className="px-3"></Button> */}
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Homepage;
