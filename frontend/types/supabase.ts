export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      eng_teams_hist: {
        Row: {
          club_logo: string | null;
          club_name: string | null;
          g_a: Json | null;
          id: string | null;
          season: string | null;
          team: string;
          top_apps: Json[] | null;
        };
        Insert: {
          club_logo?: string | null;
          club_name?: string | null;
          g_a?: Json | null;
          id?: string | null;
          season?: string | null;
          team: string;
          top_apps?: Json[] | null;
        };
        Update: {
          club_logo?: string | null;
          club_name?: string | null;
          g_a?: Json | null;
          id?: string | null;
          season?: string | null;
          team?: string;
          top_apps?: Json[] | null;
        };
        Relationships: [];
      };
      esp_teams_hist: {
        Row: {
          club_logo: string | null;
          club_name: string | null;
          g_a: Json | null;
          id: string | null;
          season: string | null;
          team: string;
          top_apps: Json[] | null;
        };
        Insert: {
          club_logo?: string | null;
          club_name?: string | null;
          g_a?: Json | null;
          id?: string | null;
          season?: string | null;
          team: string;
          top_apps?: Json[] | null;
        };
        Update: {
          club_logo?: string | null;
          club_name?: string | null;
          g_a?: Json | null;
          id?: string | null;
          season?: string | null;
          team?: string;
          top_apps?: Json[] | null;
        };
        Relationships: [];
      };
      football_leagues: {
        Row: {
          all_teams_url: string | null;
          country: string | null;
          country_flag: string | null;
          league_id: number;
          league_logo: string | null;
          league_name: string;
          matchday_url: string | null;
        };
        Insert: {
          all_teams_url?: string | null;
          country?: string | null;
          country_flag?: string | null;
          league_id?: number;
          league_logo?: string | null;
          league_name: string;
          matchday_url?: string | null;
        };
        Update: {
          all_teams_url?: string | null;
          country?: string | null;
          country_flag?: string | null;
          league_id?: number;
          league_logo?: string | null;
          league_name?: string;
          matchday_url?: string | null;
        };
        Relationships: [];
      };
      football_matches: {
        Row: {
          away_goals: number | null;
          away_team_id: number | null;
          date: string | null;
          gameweek_number: number | null;
          home_goals: number | null;
          home_team_id: number | null;
          is_upcoming: boolean | null;
          league_id: number | null;
          match_id: number;
        };
        Insert: {
          away_goals?: number | null;
          away_team_id?: number | null;
          date?: string | null;
          gameweek_number?: number | null;
          home_goals?: number | null;
          home_team_id?: number | null;
          is_upcoming?: boolean | null;
          league_id?: number | null;
          match_id?: number;
        };
        Update: {
          away_goals?: number | null;
          away_team_id?: number | null;
          date?: string | null;
          gameweek_number?: number | null;
          home_goals?: number | null;
          home_team_id?: number | null;
          is_upcoming?: boolean | null;
          league_id?: number | null;
          match_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "football_matches_away_team_id_fkey";
            columns: ["away_team_id"];
            isOneToOne: false;
            referencedRelation: "football_teams";
            referencedColumns: ["team_id"];
          },
          {
            foreignKeyName: "football_matches_home_team_id_fkey";
            columns: ["home_team_id"];
            isOneToOne: false;
            referencedRelation: "football_teams";
            referencedColumns: ["team_id"];
          },
          {
            foreignKeyName: "football_matches_league_id_fkey";
            columns: ["league_id"];
            isOneToOne: false;
            referencedRelation: "football_leagues";
            referencedColumns: ["league_id"];
          },
        ];
      };
      football_players: {
        Row: {
          all_clubs: string[] | null;
          nations: string[] | null;
          player_id: number;
          player_image: string | null;
          player_name: string;
          positions: string[] | null;
          team_id: number | null;
          transfers_url: string | null;
        };
        Insert: {
          all_clubs?: string[] | null;
          nations?: string[] | null;
          player_id?: number;
          player_image?: string | null;
          player_name: string;
          positions?: string[] | null;
          team_id?: number | null;
          transfers_url?: string | null;
        };
        Update: {
          all_clubs?: string[] | null;
          nations?: string[] | null;
          player_id?: number;
          player_image?: string | null;
          player_name?: string;
          positions?: string[] | null;
          team_id?: number | null;
          transfers_url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "football_players_team_id_fkey";
            columns: ["team_id"];
            isOneToOne: false;
            referencedRelation: "football_teams";
            referencedColumns: ["team_id"];
          },
        ];
      };
      football_teams: {
        Row: {
          league_id: number | null;
          logo: string | null;
          short_name: string;
          short_name_url: string | null;
          team_id: number;
          team_name: string;
        };
        Insert: {
          league_id?: number | null;
          logo?: string | null;
          short_name: string;
          short_name_url?: string | null;
          team_id?: number;
          team_name: string;
        };
        Update: {
          league_id?: number | null;
          logo?: string | null;
          short_name?: string;
          short_name_url?: string | null;
          team_id?: number;
          team_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "football_teams_league_id_fkey";
            columns: ["league_id"];
            isOneToOne: false;
            referencedRelation: "football_leagues";
            referencedColumns: ["league_id"];
          },
        ];
      };
      ita_teams_hist: {
        Row: {
          club_logo: string | null;
          club_name: string | null;
          g_a: Json | null;
          id: string;
          season: string | null;
          team: string;
          top_apps: Json[] | null;
        };
        Insert: {
          club_logo?: string | null;
          club_name?: string | null;
          g_a?: Json | null;
          id?: string;
          season?: string | null;
          team: string;
          top_apps?: Json[] | null;
        };
        Update: {
          club_logo?: string | null;
          club_name?: string | null;
          g_a?: Json | null;
          id?: string;
          season?: string | null;
          team?: string;
          top_apps?: Json[] | null;
        };
        Relationships: [];
      };
      predictions: {
        Row: {
          away_team_goals: number | null;
          gameweek_number: number | null;
          home_team_goals: number | null;
          match_id: number | null;
          prediction_id: number;
        };
        Insert: {
          away_team_goals?: number | null;
          gameweek_number?: number | null;
          home_team_goals?: number | null;
          match_id?: number | null;
          prediction_id?: number;
        };
        Update: {
          away_team_goals?: number | null;
          gameweek_number?: number | null;
          home_team_goals?: number | null;
          match_id?: number | null;
          prediction_id?: number;
        };
        Relationships: [];
      };
      todos: {
        Row: {
          id: number;
          inserted_at: string;
          is_complete: boolean | null;
          task: string | null;
          user_id: string;
        };
        Insert: {
          id?: number;
          inserted_at?: string;
          is_complete?: boolean | null;
          task?: string | null;
          user_id: string;
        };
        Update: {
          id?: number;
          inserted_at?: string;
          is_complete?: boolean | null;
          task?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      user_leagues: {
        Row: {
          created_at: string;
          creator_id: string | null;
          league_id: string;
          league_name: string;
        };
        Insert: {
          created_at?: string;
          creator_id?: string | null;
          league_id?: string;
          league_name: string;
        };
        Update: {
          created_at?: string;
          creator_id?: string | null;
          league_id?: string;
          league_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_leagues_creator_id_fkey";
            columns: ["creator_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["user_id"];
          },
        ];
      };
      users: {
        Row: {
          created_at: string;
          email: string | null;
          league_ids: string[] | null;
          points: number | null;
          user_id: string;
          username: string;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          league_ids?: string[] | null;
          points?: number | null;
          user_id?: string;
          username: string;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          league_ids?: string[] | null;
          points?: number | null;
          user_id?: string;
          username?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
