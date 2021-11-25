import tvmaze from 'services/api';
import { Episode } from 'typings/episodeTypes';
import { ShowEpisodes, ShowItem, ShowSearch, ShowSeason } from 'typings/showTypes';

export const getShows = async (page: number) => {
  try {
    const res = await tvmaze.get<ShowItem[]>('/shows', {
      params: {
        page
      }
    })

    return res.data

  } catch (error) {
    console.log('Error: ', { error })
    throw error;
  }
}

export const searchShows = async (text: string) => {
  try {
    const res = await tvmaze.get<ShowSearch[]>('/search/shows', { params: { q: text } })

    return res.data

  } catch (error) {
    console.log('Error: ', { error })
    throw error
  }
}



export const getShowData = async (showId: number) => {
  try {
    const seasonsEpisodes: ShowEpisodes[] = []
    
    const res = await tvmaze.get<ShowSeason[]>(`/shows/${showId}/seasons`)

    for await (const season of res.data) {
      const episodeList = await tvmaze.get<Episode[]>(`/seasons/${season.id}/episodes`)
      // console.log('Episode list: ', episodeList.data[0])
      const newEpisode = {
        season: season.number,
        data: episodeList.data
      }
      seasonsEpisodes.push(newEpisode) // = [...seasonsEpisodes, newEpisode]
    }
    
    return seasonsEpisodes

  } catch (error) {
    console.log('Error: ', { error })
    throw error;
  }
}