import { SectionTitle } from "lib/Components/SectionTitle"
import { GlobalStore } from "lib/store/GlobalStore"
import { Message } from "palette"
import React from "react"
import { LayoutAnimation } from "react-native"
import { AutosuggestSearchResult } from "./components/AutosuggestSearchResult"
import { SearchResultList } from "./components/SearchResultList"
import { MAX_SHOWN_RECENT_SEARCHES, useRecentSearches } from "./SearchModel"

export const RecentSearches: React.FC = () => {
  const recentSearches = useRecentSearches(MAX_SHOWN_RECENT_SEARCHES)
  return (
    <>
      <SectionTitle title="Recent Searches" />
      {recentSearches.length ? (
        <SearchResultList
          results={recentSearches.map(({ props: result }) => (
            <AutosuggestSearchResult
              key={result.internalID}
              result={result}
              showResultType
              updateRecentSearchesOnTap={false}
              displayingRecentResult
              onDelete={() => {
                LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 230 })
                GlobalStore.actions.search.deleteRecentSearch(result)
              }}
            />
          ))}
        />
      ) : (
        <Message>We’ll save your recent searches here</Message>
      )}
    </>
  )
}
