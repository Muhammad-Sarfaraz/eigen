import { ArticleCard } from "lib/Components/ArticleCard"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import React from "react"
import { RelayEnvironmentProvider } from "relay-hooks"
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils"
import { ArticlesQueryRenderer } from "./Articles"

jest.unmock("react-relay")

describe("Articles", () => {
  let mockEnvironment: ReturnType<typeof createMockEnvironment>
  const TestRenderer = () => (
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <ArticlesQueryRenderer />
    </RelayEnvironmentProvider>
  )

  beforeEach(() => {
    mockEnvironment = createMockEnvironment()
  })

  it("renders articles", () => {
    const tree = renderWithWrappers(<TestRenderer />)

    mockEnvironment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        Query: () => ({
          articlesConnection: {
            edges: [
              {
                node: {
                  internalID: "60b652e4f18b3a00206b56a4",
                  slug: "artsy-editorial-galleries-championing-artists-caribbean-region",
                  author: {
                    name: "Artsy Editorial",
                  },
                  href: "/article/artsy-editorial-galleries-championing-artists-caribbean-region",
                  thumbnailImage: {
                    url: "https://artsy-media-uploads.s3.amazonaws.com/Tt17h9bjYlw1kzlkJD4BGw%2FMAG+THUMB_rodell-warner-family-and-friends-no-3-2017.jpg",
                  },
                  thumbnailTitle: "The Galleries Championing Artists from the Caribbean Region",
                  vertical: "Art Market",
                },
              },
              {
                node: {
                  internalID: "60b66a16c30e110020ac3010",
                  slug: "artsy-editorial-5-artists-radar-june-06-01-21",
                  author: {
                    name: "Artsy Editorial",
                  },
                  href: "/article/artsy-editorial-5-artists-radar-june-06-01-21",
                  thumbnailImage: {
                    url: "https://artsy-media-uploads.s3.amazonaws.com/UfoSI68zesruq3yf6MKsqw%2FMAG+THUMB+1_melanie-daniel-swimmer-2021.jpg",
                  },
                  thumbnailTitle: "5 Artists on Our Radar This June",
                  vertical: "Art",
                },
              },
            ],
          },
        }),
      })
    )

    expect(tree.root.findAllByType(ArticleCard).length).toEqual(2)
  })
})
