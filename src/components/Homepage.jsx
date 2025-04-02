import { useState } from "react";
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

// Dropdown starts **************
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";

import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/shadcn/components/ui/calendar";
import { useDispatch } from "react-redux";
import { addExpense } from "@/features/expenseSlice";
import DisplayExpense from "./DisplayExpense";

function Homepage() {
  const categories = [
    {
      value: "Food",
      label: "Food",
    },
    {
      value: "Travel",
      label: "Travel",
    },
    {
      value: "Medical",
      label: "Medical",
    },
    {
      value: "Rent",
      label: "Rent",
    },
    {
      value: "Salary",
      label: "Salary",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const expense_type = [
    {
      value: "Credit",
      label: "Credit",
    },
    {
      value: "Debit",
      label: "Debit",
    },
  ];

  const [open, setOpen] = useState(false);
  const [categoryVal, setCatValue] = useState("");
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [expenseType, setexpenseType] = useState("");
  const [date, setDate] = useState();
  const [formData, setformData] = useState(null);
  const [expenseData, setExpenseData] = useState(null);
  const dispatch = useDispatch();

  function saveData() {
    console.log(formData);
    setExpenseData(formData);
    setCatValue("");
    setexpenseType("");
    setDate("");
    dispatch(addExpense(formData));
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-end p-3">
            <Button style={{ color: "red" }} className="btn">
              Add Expense
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add a Expense</DialogTitle>
            <DialogDescription className="text-orange-400">
              Keep your expenses less!
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expense-name">Expense Name</Label>
                <Input
                  required
                  id="expense-name"
                  name="name"
                  defaultValue=""
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[400px] justify-between"
                    >
                      {categoryVal
                        ? categories.find(
                            (category) => category.value === categoryVal
                          )?.label
                        : "Select Category..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search Category..."
                        className="h-15"
                      />
                      <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              key={category.value}
                              value={category.value}
                              onSelect={(currentValue) => {
                                console.log("currentValue=", currentValue);

                                setCatValue(
                                  currentValue === categoryVal
                                    ? ""
                                    : currentValue
                                );
                                setformData({
                                  ...formData,
                                  category: currentValue,
                                });
                                setOpen(false);
                              }}
                            >
                              {category.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  categoryVal === category.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* **************************Dropdown testings****************** */}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="expense_type">Expense Type</Label>

                <Popover open={expenseOpen} onOpenChange={setExpenseOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={expenseOpen}
                      className="w-[400px] justify-between"
                    >
                      {expenseType
                        ? expense_type.find(
                            (expense) => expense.value === expenseType
                          )?.label
                        : "Select Expense Type..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      {/* <CommandInput
                      placeholder="Search Category..."
                      className="h-15"
                    /> */}
                      <CommandList>
                        {/* <CommandEmpty>No category found.</CommandEmpty> */}
                        <CommandGroup>
                          {expense_type.map((expense) => (
                            <CommandItem
                              key={expense.value}
                              value={expense.value}
                              onSelect={(currentValue) => {
                                setexpenseType(
                                currentValue === expenseType ? "" : currentValue
                                );

                                setformData({
                                  ...formData,
                                  expenseType: currentValue,
                                });
                                setExpenseOpen(false);
                              }}
                            >
                              {expense.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  expenseType === expense.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                          {/* <CommandItem>Test</CommandItem>
                        <CommandItem>Test</CommandItem> */}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* <div className="grid gap-4"> */}
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  name="amount"
                  defaultValue=""
                  min={0}
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      [e.target.name]: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="test">Test</Label>
                <Select
                  onValueChange={(value) => {
                    console.log("selecte val=", value, name);
                    setformData({ ...formData, selectbox: value });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(currentDate) => {
                        setDate(currentDate.toISOString());
                        setformData({
                          ...formData,
                          date: currentDate.toISOString(),
                        });
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <div className="space-x-60 mt-4">
                  <Button
                    type="button"
                    className="bg-red-500 btn"
                    onClick={() => {
                      setformData(null);
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    className="bg-green-600 text-white btn"
                    onClick={saveData}
                  >
                    Save
                  </Button>
                </div>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {/* <p>{JSON.stringify(formData)}</p>
      <p>{JSON.stringify(expenseData)}</p> */}
      <DisplayExpense />
    </>
  );
}

export default Homepage;
