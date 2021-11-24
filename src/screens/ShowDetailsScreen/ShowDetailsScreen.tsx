import { useRoute } from '@react-navigation/core'
import { EpisodeCard, SeasonScroll, ShowHeader, ShowInfo } from 'components'
import React, { useEffect, useState } from 'react'
import { View, SectionList, ActivityIndicator, useWindowDimensions } from 'react-native'
import { ShowDetailsRouteProps } from 'routes/config/types'
import { getShowData } from 'store/actions/showsActions'
import { Colors } from 'theme'
import { ShowEpisodes } from 'typings/showTypes'
import { styles } from './styles'

const ListEmptyComponent: React.FC = () => {
  const { height } = useWindowDimensions()
  return (
    <View style={{ paddingVertical: height * 0.05 }}>
      <ActivityIndicator size='large' color={Colors.SapphireBlue} />
    </View>
  )
}

const ShowDetailsScreen: React.FC = () => {
  const { params: { show } } = useRoute<ShowDetailsRouteProps>()

  // const [loading, setLoading] = useState<boolean>(true)
  const [seasons, setSeasons] = useState<ShowEpisodes[]>([])
  const [selected, setSelected] = useState<number>(1)
  
  const [data, setData] = useState<ShowEpisodes[]>([])


  const fetchSeasons = async () => {
    try {
      const res = await getShowData(show.id)
      setSeasons(res)
      setData( [res[0]] )
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect( () => {
    fetchSeasons()
  }, [])

  const onSeasonPress = (value: number) => {
    setSelected(value)
    const finder = seasons.find( season => season.season === value)
    setData( finder ? [ finder ] : [])
  }

  return (
    <View style={styles.root}>
      <ShowHeader label='Show Detail' />
      <View style={styles.content}>
        <SectionList
          bounces={false}
          ListHeaderComponent={<ShowInfo show={show} />}
          ListEmptyComponent={<ListEmptyComponent />}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item }) => (
            <EpisodeCard
              episode={item}
              onPress={() => null}
            />
          )}
          renderSectionHeader={() => (
            <SeasonScroll
              seasons={seasons}
              selected={selected}
              onSeasonPress={onSeasonPress}
            />
          )}
          sections={data}
        />
      </View>
    </View>
  )
}

export default ShowDetailsScreen