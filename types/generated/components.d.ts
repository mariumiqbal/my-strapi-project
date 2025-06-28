import type { Schema, Struct } from '@strapi/strapi';

export interface PlayerPlayer extends Struct.ComponentSchema {
  collectionName: 'components_player_players';
  info: {
    displayName: 'Player';
  };
  attributes: {
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    team: Schema.Attribute.Component<'teams.teams', true>;
  };
}

export interface TeamsTeams extends Struct.ComponentSchema {
  collectionName: 'components_teams_teams';
  info: {
    displayName: 'teams';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'player.player': PlayerPlayer;
      'teams.teams': TeamsTeams;
    }
  }
}
