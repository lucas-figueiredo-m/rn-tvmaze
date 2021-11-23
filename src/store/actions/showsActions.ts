import tvmaze from 'services/api';
import { ShowItem } from 'typings/showTypes';

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