import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { DATA } from '../data'
import { Article } from '../components/OneArticle'

export const ArticlesList = ({ navigation }) => {
  const openArticleHandler = article => {
    navigation.navigate('Article', { articleId: article.id, articleTitle: article.title})
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={article => article.id.toString()}
        renderItem={({ item }) => <Article article={item} onOpen={openArticleHandler}/>}
      />
  </View>
  )
}

ArticlesList.navigationOptions = {
  headerTitle: 'Articles'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})