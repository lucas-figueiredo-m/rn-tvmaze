
export enum ShowStatus {
    ENDED = 'Ended',
    RUNNING = 'Running'
}

export interface ShowItem {
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: string[],
  status: ShowStatus,
  runtime: number,
  averageRuntime: number,
  premiered: Date,
  ended: Date | null,
  officialSite: string,
  schedule: {
      time: string,
      days: string[]
  },
  rating: {
      average: null // TODO: Attention
  },
  weight: number,
  network: {
      id: number,
      name: string,
      country: {
          name: string,
          code: string,
          timezone: string,
      }
  },
  webChannel: {
      id: number,
      name: string,
      country: {
          name: string,
          code: string,
          timezone: string,
      }
  },
  dvdCountry: null, // TODO: Attention
  externals: {
      tvrage: number,
      thetvdb: number,
      imdb: string
  },
  image: {
      medium: string,
      original: string,
  },
  summary: string,
  updated: number,
  _links: {
      self: {
          href: string
      },
      previousepisode: {
          href: string
      }
  }
}

export interface ShowSeason {
    id: number,
    url: string,
    number: number,
    name: string,
    episodeOrder: number,
    premiereDate: Date,
    endDate: Date,
    network: {
        id: number,
        name: string,
        country: {
            name: string,
            code: string,
            timezone: string
        }
    },
    webChannel: string | null,
    image: {
        medium: string,
        original: string,
    },
    summary: string,
    _links: {
        self: {
            href: string
        }
    }
}