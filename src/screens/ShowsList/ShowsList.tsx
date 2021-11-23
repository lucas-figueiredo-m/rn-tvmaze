import { Container, Header, Separator } from 'components/common'
import { ShowCard } from 'components/ShowCard/ShowCard'
import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { getShows } from 'store/actions/showsActions'
import { ShowItem } from 'typings/showTypes'
import { styles } from './styles'

const ShowsList: React.FC = () => {
  const [page, setPage] = useState<number>(0)
  const [shows, setShows] = useState<ShowItem[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('')

  const fetchShows = async (pageNumber = page) => {
    try {
      const res = await getShows(pageNumber)
      console.log('res: ', res)
      setShows(res)
      setLoading(false)
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
          renderItem={({ item }) => (
            <ShowCard
              show={item}
              onPress={()=>null}
              onFavoritePress={()=>null}
            />
          )}
        />

      </Container>
    </View>
  )
}

export default ShowsList