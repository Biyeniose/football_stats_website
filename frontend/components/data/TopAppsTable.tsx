"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Image,
} from "@nextui-org/react";

import { Player } from "../../types/index";

interface TopAppsTableProps {
  players: Player[];
}

const columns = [
  { name: "NAME", uid: "name" },
  { name: "APPS", uid: "apps" },
  { name: "G/A", uid: "goals" },
  { name: "NATIONS", uid: "nations" },
];

const TopAppsTable: React.FC<TopAppsTableProps> = ({ players }) => {
  const renderCell = React.useCallback((player: Player, columnKey: any) => {
    const {
      player_name,
      number,
      g_a,
      goals,
      assists,
      age,
      position,
      photo_url,
      apps,
      nation,
    } = player;

    const [nation1, flag1, nation2, flag2] = nation;

    switch (columnKey) {
      case "name":
        return (
          <div className="">
            <User
              avatarProps={{
                radius: "lg",
                src: photo_url.replace("small", "medium"),
              }}
              description={position}
              name={player_name}
            >
              {position}
            </User>
          </div>
        );
      case "apps":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{apps}</p>
            <p className="text-bold text-sm text-default-400">{age} yo</p>
          </div>
        );
      case "nations":
        return (
          <span className="items-center">
            <Image
              alt="nation flag"
              className="py-1"
              height={25}
              radius="sm"
              src={flag1.replace("verysmall", "small")}
              width={25}
            />
            {nation2 && flag2 && (
              <>
                <Image
                  alt="nation flag"
                  className="py-1"
                  height={25}
                  radius="sm"
                  src={flag2.replace("verysmall", "small")}
                  width={25}
                />
              </>
            )}
          </span>
        );
      case "goals":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{g_a}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              ({goals}/{assists})
            </p>
          </div>
        );
      default:
        return null;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={players}>
        {(player) => (
          <TableRow key={player.number}>
            {(columnKey) => (
              <TableCell>{renderCell(player, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TopAppsTable;
