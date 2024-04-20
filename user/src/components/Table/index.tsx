import React from "react";
import { Table } from "flowbite-react";
import { Purchases } from "../../entities/Purchase";

interface Props {
  headers: string[];
  body: Purchases[];
}

const TableC = ({ headers, body }: Props) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          {headers.map((header) => {
            return (
              <Table.HeadCell className="font-bold font-mono">
                {header}
              </Table.HeadCell>
            );
          })}
        </Table.Head>
        <Table.Body className="divide-y divide-gray-900">
          {body.map((content) => {
            return (
              <Table.Row className="bg-white border-gray-700 ">
                <Table.Cell className="whitespace-nowrap font-bold text-gray-900 font-mono">
                  {content.userName}
                </Table.Cell>
                <Table.Cell className="font-medium font-mono">
                  {content.productName}
                </Table.Cell>
                <Table.Cell className="font-medium font-mono">
                  {content.quantity}
                </Table.Cell>
                <Table.Cell className="font-medium font-mono">
                  {new Date(content.date).toDateString()}
                </Table.Cell>
                <Table.Cell className="font-medium font-mono font-bold">
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                  }).format(Number(content.totalPrice))}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export { TableC };
