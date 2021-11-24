import { useRoute } from '@react-navigation/core'
import { SeasonScroll, ShowHeader, ShowInfo } from 'components'
import React, { useEffect } from 'react'
import { View, Text, SectionList } from 'react-native'
import { ShowDetailsRouteProps } from 'routes/config/types'
import { getShowSeasons } from 'store/actions/showsActions'
import { styles } from './styles'

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto",]
  }
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const ShowDetailsScreen: React.FC = () => {
  const { params: { show } } = useRoute<ShowDetailsRouteProps>()


  const fetchSeasons = async () => {
    try {
      const res = await getShowSeasons(show.id)
      console.log('res: ', res)
      
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect( () => {
    fetchSeasons()
  }, [])

  return (
    <View style={styles.root}>
      <ShowHeader label='Show Detail' />
      <View style={styles.content}>
        <SectionList
          bounces={false}
          ListHeaderComponent={<ShowInfo show={show} />}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={() => (
            <SeasonScroll seasons={6} />
          )}
          sections={DATA}
        />
          


      </View>
    </View>
  )
}

export default ShowDetailsScreen