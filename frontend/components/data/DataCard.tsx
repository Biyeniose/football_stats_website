"use client";

import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

import { Player } from "../../types/index";

interface DataCardProps {
  player: Player;
}

const DataCard: React.FC<DataCardProps> = ({ player }) => {
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

  return (
    <div className="px-2">
      <div className="vert-padding">
        <Card
          className="py-4 px-1 "
          style={{ width: "auto", display: "inline-block" }}
        >
          <CardHeader className="pb-0 pt-0.5 px-2 flex-col items-start">
            <h4 className="font-bold text-small whitespace-nowrap">
              {player_name}
            </h4>
            <p className="text-tiny uppercase font-bold">
              #{number} ({age})
            </p>
            <small className="text-default-500">{position}</small>
            <div className="pt-1 flex items-center">
              <span className="mr-2">{nation1}</span>
              <Image
                alt="nation flag"
                className="mr-2"
                height={25}
                radius="sm"
                src={flag1}
                width={25}
              />
              {nation2 && flag2 && (
                <>
                  <span className="mr-2">{nation2}</span>
                  <Image
                    alt="nation flag"
                    className="mr-2"
                    height={25}
                    radius="sm"
                    src={flag2}
                    width={25}
                  />
                </>
              )}
            </div>
          </CardHeader>
          <div className="px-2 overflow-visible py-2 flex">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={photo_url.replace("small", "medium")}
              width={80}
            />
          </div>
          <div className="px-2 pt-1 flex flex-col text-xs flex-grow items-start">
            <p>
              {g_a} ({goals}/{assists}) G/A
            </p>
            <p>{apps} Appearances</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DataCard;
