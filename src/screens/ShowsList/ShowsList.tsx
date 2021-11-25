import { useNavigation } from '@react-navigation/core'
import { Container, Header, Separator } from 'components/common'
import { ShowCard } from 'components/ShowCard/ShowCard'
import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { HomeStackRoutes } from 'routes/config'
import { ShowListProps } from 'routes/config/types'
import { getShows } from 'store/actions/showsActions'
import { Colors } from 'theme'
import { ShowItem } from 'typings/showTypes'
import { styles } from './styles'

const ShowsList: React.FC = () => {
  const [page, setPage] = useState<number>(0)
  const [shows, setShows] = useState<ShowItem[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('')

  const { navigate } = useNavigation<ShowListProps>()

  const fetchShows = async (pageNumber = page) => {
    try {
      const res = await getShows(pageNumber)

      setShows(res)
      setLoading(false)
      setPage( prev => prev + 1)
      setError('')

    } catch (err) {
      console.log('fail: ', { err })
    }
  } 
  
  useEffect( () => {
    fetchShows()
  }, [])

  return (
    <View style={styles.root}>
      <Header />
      <Container
        loading={loading}
        error={error}
      >
        <FlatList
          data={shows}
          keyExtractor={(_item, index) => index.toString()}
          ItemSeparatorComponent={() => <Separator />}
          onEndReachedThreshold={0.9}
          onEndReached={() => fetchShows()}
          ListFooterComponent={() => (
            <View style={styles.spinner}>
              <ActivityIndicator size='large' color={Colors.RoyalBlueDark} /> 
            </View>
          )}
          renderItem={({ item }) => (
            <ShowCard
              show={item}
              onPress={() => navigate(HomeStackRoutes.SHOW_DETAIL_SCREEN, { show: item }) }
              onFavoritePress={()=>null}
            />
          )}
        />

      </Container>
    </View>
  )
}

export default ShowsList