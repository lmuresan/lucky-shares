enum GameRatio {
  A = "4:3",
  B = "16:9"
}

enum Feature {
  ACTIVE = 1,
  INACTIVE = 0
}

type GameTypes = {
  realMode: Feature;
  funMode?: Feature;
};

export type GameCategory = {
  id: string;
  title: string;
  type: "category";
};

type GameFeats = {
    id: string;
    title: string;
    type: "feature";
};

type GameThms = {
  id: string;
  title: string;
  type: "theme"
}

export type Game = {
  categories: string[];
  features: string[];
  themes: string[];
  icons: [];
  backgrounds: [];
  id: string;
  server_game_id: string;
  extearnal_game_id: string;
  front_game_id: string;
  name: string;
  title: null;
  ratio: GameRatio;
  status: string;
  provider: string;
  show_as_provider: string;
  provider_title: string;
  game_options: null;
  blocked_countries: null;
  has_age_restriction: number;
  icon_2: string;
  icon_3?: string;
  background: string;
  types: GameTypes;
  game_skin_id: string;
  cats: GameCategory[];
  feats: GameFeats[];
  thms: GameThms[];
  active: number;
};
