import React from 'react'
import { 
  View, 
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

export const Article = ({ article, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(article)}>
      <View style={styles.article}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {article.title}
            </Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  article: {
    marginBottom: 1,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: '#4D008C',
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontSize: 20
  }
})
