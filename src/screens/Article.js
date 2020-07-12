import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import { DATA } from '../data'

export const Article = ({ navigation }) => {
  const articleId = navigation.getParam('articleId')

  const article = DATA.find(a => a.id === articleId)

  return (
    <ScrollView>
      <Image source={{ uri: article.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.text}>{article.text}</Text>
      </View>
    </ScrollView>
  )
}

Article.navigationOptions = ({ navigation }) => {
  const articleTitle = navigation.getParam('articleTitle')
  return {
    headerTitle: articleTitle
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 30
  },
  text: {
    fontSize: 20
  }
})