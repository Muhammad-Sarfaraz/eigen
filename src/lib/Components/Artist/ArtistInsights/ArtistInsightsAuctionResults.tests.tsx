import { ArtistInsightsAuctionResultsTestsQuery } from "__generated__/ArtistInsightsAuctionResultsTestsQuery.graphql"
import { ArtworkFiltersState, ArtworkFiltersStoreProvider } from "lib/Components/ArtworkFilter/ArtworkFilterStore"
import { FilteredArtworkGridZeroState } from "lib/Components/ArtworkGrids/FilteredArtworkGridZeroState"
import { AuctionResultListItemFragmentContainer } from "lib/Components/Lists/AuctionResultListItem"
import { extractText } from "lib/tests/extractText"
import { mockEdges } from "lib/tests/mockEnvironmentPayload"
import { mockEnvironmentPayload } from "lib/tests/mockEnvironmentPayload"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import React from "react"
import { FlatList } from "react-native"
import { graphql, QueryRenderer } from "react-relay"
import { createMockEnvironment } from "relay-test-utils"
import { ArtistInsightsAuctionResultsPaginationContainer, SortMode } from "./ArtistInsightsAuctionResults"

jest.unmock("react-relay")

describe("ArtistInsightsAuctionResults", () => {
  let mockEnvironment: ReturnType<typeof createMockEnvironment>

  const initialState: ArtworkFiltersState = {
    selectedFilters: [],
    appliedFilters: [],
    previouslyAppliedFilters: [],
    applyFilters: false,
    aggregations: [],
    filterType: "auctionResult",
    counts: {
      total: null,
      followedArtists: null,
    },
  }

  beforeEach(() => {
    mockEnvironment = createMockEnvironment()
  })

  const TestRenderer = ({ initialData = initialState }: { initialData?: ArtworkFiltersState }) => (
    <QueryRenderer<ArtistInsightsAuctionResultsTestsQuery>
      environment={mockEnvironment}
      query={graphql`
        query ArtistInsightsAuctionResultsTestsQuery @relay_test_operation {
          artist(id: "some-id") {
            ...ArtistInsightsAuctionResults_artist
          }
        }
      `}
      variables={{}}
      render={({ props }) => {
        if (props?.artist) {
          return (
            <ArtworkFiltersStoreProvider initialData={initialData}>
              <ArtistInsightsAuctionResultsPaginationContainer
                artist={props.artist}
                scrollToTop={() => {
                  console.log("do nothing")
                }}
              />
            </ArtworkFiltersStoreProvider>
          )
        }
        return null
      }}
    />
  )

  it("renders list auction results when auction results are available", () => {
    const tree = renderWithWrappers(<TestRenderer initialData={initialState} />)
    mockEnvironmentPayload(mockEnvironment, {
      Artist: () => ({
        auctionResultsConnection: {
          totalCount: 5,
          edges: mockEdges(5),
        },
      }),
    })

    expect(tree.root.findAllByType(FlatList).length).toEqual(1)
    expect(tree.root.findAllByType(AuctionResultListItemFragmentContainer).length).toEqual(5)
  })

  it("renders FilteredArtworkGridZeroState when no auction results are available", () => {
    const tree = renderWithWrappers(<TestRenderer initialData={initialState} />)
    mockEnvironmentPayload(mockEnvironment, {
      Artist: () => ({
        auctionResultsConnection: {
          totalCount: 0,
          edges: [],
        },
      }),
    })

    expect(tree.root.findAllByType(FilteredArtworkGridZeroState).length).toEqual(1)
  })

  describe("ListHeaderComponent", () => {
    it("renders the results string when totalCount is equal to 1", () => {
      const tree = renderWithWrappers(<TestRenderer initialData={initialState} />)
      mockEnvironmentPayload(mockEnvironment, {
        Artist: () => ({
          auctionResultsConnection: {
            totalCount: 1,
            edges: mockEdges(1),
          },
        }),
      })

      expect(extractText(tree.root.findByType(SortMode))).toBe("1 result • Sorted by most recent sale date")
    })

    it("renders the results string when totalCount is greater than 1", () => {
      const tree = renderWithWrappers(<TestRenderer initialData={initialState} />)
      mockEnvironmentPayload(mockEnvironment, {
        Artist: () => ({
          auctionResultsConnection: {
            totalCount: 10,
            edges: mockEdges(10),
          },
        }),
      })
      expect(extractText(tree.root.findByType(SortMode))).toBe("10 results • Sorted by most recent sale date")
    })
  })
})
