import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/components/ui/table";

function TableComp({ data, balance }) {
  console.log("Data===", data, balance);
  var arr = ["hello"];

  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="flex justify-center font-bold text-2xl mb-8">
            Total Balance:{balance}
          </div>
          <Table>
            <TableCaption>A list of your recent expenses.</TableCaption>
            <TableHeader>
              <TableRow className="w-[100px]">
                <TableHead>ID</TableHead>
                <TableHead>Expense Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Expense Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.expenseType}</TableCell>
                  <TableCell>
                    {new Date(item.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </TableCell>
                  <TableCell>{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div>
          <Table>
            <TableHeader>
              <TableRow className="w-[100px]">
                <TableHead>ID</TableHead>
                <TableHead>Expense Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Expense Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" justify-center">
              <TableRow>
                <TableCell colSpan={6} className="font- text-center">
                  No Expenses added
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}

export default TableComp;
