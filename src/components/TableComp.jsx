import React from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/components/ui/table";
import { Button } from "@/shadcn/components/ui/button";

function TableComp({ data, balance }) {
  // console.log("Data===", data, balance);
  var tableHeaders = [
    "ID",
    "Expense Name",
    "Category",
    "Expense Type",
    "Date",
    "Amount",
    "Actions",
  ];

  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="flex justify-center font-bold text-2xl mb-8">
            Total Balance: {balance}
          </div>
          <Table>
            <TableCaption>A list of your recent expenses.</TableCaption>
            <TableHeader>
              <TableRow className="w-[100px]">
                {tableHeaders.map((item) => (
                  <TableHead key={item}>{item}</TableHead>
                ))}
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
                      // hour: "2-digit",
                      // minute: "2-digit",
                      // hour12: true,
                    })}
                  </TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <Button className="mr-3 bg-green-500">Edit</Button>
                    <Button className="bg-red-500">Delete</Button>
                  </TableCell>
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
                {tableHeaders.map((item) => (
                  <TableHead key={item}>{item}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className=" justify-center">
              <TableRow>
                <TableCell colSpan={7} className="text-center">
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
