

export interface Episode {
  id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  type: 'regular' | string,
  airdate: Date,
  airtime: Date,
  airstamp: Date,
  runtime: number,
  rating: {
      average: number
  },
  image: {
      medium:  string,
      original: string,
  },
  summary: string,
  _links: {
      self: {
          href: string
      }
  }
}