import { useNavigation } from '@react-navigation/core'
import { Container, Header, SearchInput, Separator } from 'components/common'
import { ShowCard } from 'components/ShowCard/ShowCard'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { HomeStackRoutes, TabRoutes } from 'routes/config'
import { SearchScreenProps } from 'routes/config/types'
import { concat, Subject } from 'rxjs'
import { filter, map, debounceTime } from 'rxjs/operators'
import { searchShows } from 'store/actions/showsActions'
import { ShowSearch } from 'typings/showTypes'
import { styles } from './styles'

const action$ = new Subject<string>();

const obsevable$ = concat(action$.pipe(
  filter( text => text.length > 2),
  debounceTime(3000),
  map( text => {
    return text
  }),
))

const SearchScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [shows, setShows] = useState<ShowSearch[]>([])
  const [page, setPage] = useState<number>(0)
  const [error, setError] = useState<string>('')

  const { navigate, jumpTo } = useNavigation<SearchScreenProps>()

  const getShows = useCallback( async (q: string) => {
    try {
      setLoading(true)
      const showList = await searchShows(q)
      
      setShows(showList)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log('Error: ', { err })
    }
  }, [search, page])

  useEffect(() => {
    const sub = action$.subscribe(text => {
      if (text !== '') setLoading(true)
      else setShows([])
        
      setSearch(text)
    })
    const monitor = obsevable$.subscribe( async (text) => {
      await getShows(text)
      setLoading(false)
    });

    return () => {
      sub.unsubscribe()
      monitor.unsubscribe()
    }
  }, [])

  return (
    <View style={styles.root}>
      <Header />
      <SearchInput
        value={search}
        onChangeText={(text) => action$.next(text)}
        placeholder='Search'
        onCleanPress={() => setSearch('')}
      />
      <Container
        loading={loading && search.length > 2}
        error={search.length > 2 ? error : 'Enter at least 3 characters to start the search'}
      >
        <FlatList
          data={shows}
          keyExtractor={(_item, index) => index.toString()}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <ShowCard
              show={item.show}
              onPress={() => jumpTo(TabRoutes.HOME_STACK, {
                screen: HomeStackRoutes.SHOW_DETAIL_SCREEN,
                params: { show: item.show }
              })}
              onFavoritePress={() => null }
            />
          )}
        />

      </Container>
    </View>
  )
}

export default SearchScreen