import { fireEvent } from "@testing-library/react-native"
import { GeneArtworksTestsQuery } from "__generated__/GeneArtworksTestsQuery.graphql"
import { StickyTabPage } from "lib/Components/StickyTabPage/StickyTabPage"
import { mockEnvironmentPayload } from "lib/tests/mockEnvironmentPayload"
import { renderWithWrappersTL } from "lib/tests/renderWithWrappers"
import React from "react"
import { graphql, QueryRenderer } from "react-relay"
import { createMockEnvironment } from "relay-test-utils"
import { GeneArtworksPaginationContainer } from "./GeneArtworks"

jest.unmock("react-relay")

describe("GeneArtworks", () => {
  const geneID = "gene-id"
  let environment: ReturnType<typeof createMockEnvironment>

  beforeEach(() => {
    environment = createMockEnvironment()
  })

  const TestRenderer = () => {
    return (
      <QueryRenderer<GeneArtworksTestsQuery>
        environment={environment}
        query={graphql`
          query GeneArtworksTestsQuery($geneID: String!, $input: FilterArtworksInput) @relay_test_operation {
            gene(id: $geneID) {
              ...GeneArtworks_gene @arguments(input: $input)
            }
          }
        `}
        render={({ props }) => {
          if (props?.gene) {
            return (
              <StickyTabPage
                staticHeaderContent={<></>}
                tabs={[
                  {
                    title: "GeneArtworks",
                    content: <GeneArtworksPaginationContainer gene={props.gene} />,
                  },
                ]}
              />
            )
          }

          return null
        }}
        variables={{
          geneID,
          input: {
            medium: "*",
            priceRange: "*-*",
          },
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
      Gene() {
        return {
          artworks: {
            counts: {
              total: 0,
            },
          },
        }
      },
    })
    const emptyMessage = "There aren’t any works available in the category at this time."

    expect(getByText(emptyMessage)).toBeTruthy()
  })
})
