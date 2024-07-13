"use client";

import React, { useEffect, useState } from "react";

import { Player } from "@/types";
import TopAppsTable from "@/components/data/TopAppsTable";
import { title } from "@/components/primitives";

export default function DataPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/stats/liv");
        const data = await response.json();
        const playersData = data[0]?.top_apps || [];

        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching players data:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="">
      <div className="text-center">
        <h1 className={title()}>Data</h1>
      </div>
      <div className="py-4 ">
        <TopAppsTable players={players} />
      </div>
    </div>
  );
}
