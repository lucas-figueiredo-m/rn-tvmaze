import tvmaze from 'services/api';
import { ShowItem, ShowSeason } from 'typings/showTypes';

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

export const getShowSeasons = async (showId: number) => {
  try {
    const res = await tvmaze.get<ShowSeason[]>(`/shows/${showId}/seasons`)

    return res.data

  } catch (error) {
    console.log('Error: ', { error })
    throw error;
  }
}