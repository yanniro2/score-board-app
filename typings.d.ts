export interface Data {
  match_id: number;
  additional_duration: number;
  team_one_total: number;
  team_two_total: number;

  layout: string;
  is_live: string;
  is_change: string;

  team_one_try: string;
  team_two_try: string;
  team_one_conversion: number;
  team_two_conversion: number;
  team_one_penalty: number;
  team_two_penalty: number;
  team_one_goal: number;
  team_two_goal: number;
}

export interface tryData {
  match_id: string;
  team_one_try: string;
  team_two_try: string;
  team_one_conversion: string;
  team_two_conversion: string;
  team_one_penalty: string;
  team_two_penalty: string;
  team_one_goal: string;
  team_two_goal: string;
  layout: string;
}

export interface tryData_1 {
  match_id: string;
  team_one_goal: string;
  team_two_goal: string;
  layout: string;
}
