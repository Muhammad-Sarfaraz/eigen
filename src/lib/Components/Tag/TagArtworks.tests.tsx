import { fireEvent } from "@testing-library/react-native"
import { TagArtworksTestsQuery } from "__generated__/TagArtworksTestsQuery.graphql"
import { StickyTabPage } from "lib/Components/StickyTabPage/StickyTabPage"
import { mockEnvironmentPayload } from "lib/tests/mockEnvironmentPayload"
import { renderWithWrappersTL } from "lib/tests/renderWithWrappers"
import React from "react"
import { graphql, QueryRenderer } from "react-relay"
import { createMockEnvironment } from "relay-test-utils"
import { TagArtworksPaginationContainer } from "./TagArtworks"

jest.unmock("react-relay")

describe("TagArtworks", () => {
  const tagID = "tag-id"
  let environment: ReturnType<typeof createMockEnvironment>

  beforeEach(() => {
    environment = createMockEnvironment()
  })

  const TestRenderer = () => {
    return (
      <QueryRenderer<TagArtworksTestsQuery>
        environment={environment}
        query={graphql`
          query TagArtworksTestsQuery($tagID: String!, $input: FilterArtworksInput) @relay_test_operation {
            tag(id: $tagID) {
              ...TagArtworks_tag @arguments(input: $input)
            }
          }
        `}
        render={({ props }) => {
          if (props?.tag) {
            return (
              <StickyTabPage
                staticHeaderContent={<></>}
                tabs={[
                  {
                    title: "TagArtworks",
                    content: <TagArtworksPaginationContainer tag={props.tag} />,
                  },
                ]}
              />
            )
          }

          return null
        }}
        variables={{
          tagID,
        }}
      />
    )
  }

  it("renders without throwing an error", () => {
    renderWithWrappersTL(<TestRenderer />)
    mockEnvironmentPayload(environment)
  })

  it("renders filter header", () => {
    const { getByText } = renderWithWrappersTL(<TestRenderer />)
    mockEnvironmentPayload(environment)

    expect(getByText("Sort & Filter")).toBeTruthy()
  })

  it("renders artworks grid", () => {
    const { getByText } = renderWithWrappersTL(<TestRenderer />)
    mockEnvironmentPayload(environment, {
      FilterArtworksConnection() {
        return {
          counts: {
            total: 10,
          },
        }
      },
    })

    // Find by artwork title
    expect(getByText("title-1")).toBeTruthy()
  })

  it("renders empty artworks grid view", () => {
    const { getByText, getAllByText } = renderWithWrappersTL(<TestRenderer />)
    mockEnvironmentPayload(environment, {
      FilterArtworksConnection() {
        return {
          counts: {
            total: 10,
          },
        }
      },
    })

    // Change sort filter
    fireEvent.press(getByText("Sort & Filter"))
    fireEvent.press(getByText("Sort By"))
    fireEvent.press(getByText("Recently Added"))
    fireEvent.press(getAllByText("Show results")[0])

    mockEnvironmentPayload(environment, {
      FilterArtworksConnection() {
        return {
          counts: {
            total: 0,
          },
        }
      },
    })

    expect(getByText(/No results found/)).toBeTruthy()
  })

  it("renders empty message when artworks is empty", () => {
    const { getByText } = renderWithWrappersTL(<TestRenderer />)
    mockEnvironmentPayload(environment, {
      Tag() {
        return {
          artworks: {
            counts: {
              total: 0,
            },
          },
        }
      },
    })
    const emptyMessage = "There aren’t any works available in the tag at this time."

    expect(getByText(emptyMessage)).toBeTruthy()
  })
})
