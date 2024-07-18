"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { title } from "@/components/primitives";

type League = {
  league_name: string;
  league_id: number;
  league_logo: string;
};

type Team = {
  team_name: string;
  team_id: number;
  logo: string;
};

const fetchTeams = async (leagueId: number): Promise<Team[]> => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/teams/${leagueId}`
    );

    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch teams.");
  }
};

export default function StandingsPage() {
  const router = useRouter();
  const [leagues, setLeagues] = useState<League[]>([]);

  const [teams, setTeams] = useState<{ [key: number]: Team[] }>({});

  //const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const fetchTeams = async (): Promise<League[]> => {
  // try {
  // const response = await axios.get("http://localhost:8080/api/eng");

  //     return response.data;
  // } catch (err) {
  // throw new Error("Failed to fetch leagues.");
  // }
  //};

  const fetchTeams = async (leagueId: number): Promise<Team[]> => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/teams/${leagueId}`
      );

      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch teams.");
    }
  };

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/leagues");

        setLeagues(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch leagues.");
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  const handleAccordionItemOpen = async (leagueId: number) => {
    if (!teams[leagueId]) {
      try {
        const teamsData = await fetchTeams(leagueId);

        setTeams((prevTeams) => ({ ...prevTeams, [leagueId]: teamsData }));
      } catch (err) {
        //setError(err any);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-4">
      <h1 className={title()}>Standings</h1>
      <div className="py-4">
        <Accordion variant="shadow">
          {leagues.map((league) => (
            <AccordionItem
              key={league.league_id}
              title={league.league_name}
              onClick={() => handleAccordionItemOpen(league.league_id)}
            >
              {teams[league.league_id] ? (
                teams[league.league_id].map((team) => (
                  <div key={team.team_id} className="flex items-center py-2">
                    <img
                      alt={team.team_name}
                      className="w-10 h-10 mr-4"
                      src={team.logo || "https://via.placeholder.com/70"}
                    />
                    <span>{team.team_name}</span>
                  </div>
                ))
              ) : (
                <div>Loading teams...</div>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
