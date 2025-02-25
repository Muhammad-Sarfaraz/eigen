import { ArticlesRail_articlesConnection } from "__generated__/ArticlesRail_articlesConnection.graphql"
import { SectionTitle } from "lib/Components/SectionTitle"
import { navigate } from "lib/navigation/navigate"
import { extractNodes } from "lib/utils/extractNodes"
import { Flex, Spacer } from "palette"
import React from "react"
import { FlatList } from "react-native"
import { createFragmentContainer } from "react-relay"
import { useTracking } from "react-tracking"
import { graphql } from "relay-hooks"
import { ArticleCardContainer } from "../../../Components/ArticleCard"
import HomeAnalytics from "../homeAnalytics"

interface ArticlesRailProps {
  title: string
  articlesConnection: ArticlesRail_articlesConnection
  mb?: number
}

export const ArticlesRail: React.FC<ArticlesRailProps> = ({ title, articlesConnection, mb }) => {
  const articles = extractNodes(articlesConnection)

  if (!articles.length) {
    return null
  }

  const tracking = useTracking()

  return (
    <Flex mb={mb}>
      <Flex mx={2}>
        <SectionTitle
          title={title}
          onPress={() => {
            tracking.trackEvent(HomeAnalytics.articlesHeaderTapEvent())
            navigate("/articles")
          }}
        />
      </Flex>
      <Flex>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <Spacer ml="2" />}
          ListFooterComponent={() => <Spacer ml="2" />}
          ItemSeparatorComponent={() => <Spacer ml="2" />}
          data={articles}
          keyExtractor={(item) => `${item.internalID}`}
          renderItem={({ item, index }) => (
            <ArticleCardContainer
              onPress={() => {
                const tapEvent = HomeAnalytics.articleThumbnailTapEvent(item.internalID, item.slug || "", index)
                tracking.trackEvent(tapEvent)
              }}
              article={item}
            />
          )}
        />
      </Flex>
    </Flex>
  )
}

export const ArticlesRailFragmentContainer = createFragmentContainer(ArticlesRail, {
  articlesConnection: graphql`
    fragment ArticlesRail_articlesConnection on ArticleConnection {
      edges {
        node {
          internalID
          slug
          ...ArticleCard_article
        }
      }
    }
  `,
})
