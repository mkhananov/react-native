import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { ArticlesList } from '../screens/ArticlesList'
import { Article } from '../screens/Article'

const ArticleNavigator = createStackNavigator(
  {
    ArticlesList: ArticlesList,
    Article: Article
  },
)

export const AppNavigation = createAppContainer(ArticleNavigator)
