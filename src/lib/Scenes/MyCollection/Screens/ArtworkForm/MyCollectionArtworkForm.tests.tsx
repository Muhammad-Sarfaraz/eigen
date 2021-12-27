import { act, fireEvent } from "@testing-library/react-native"
import { AutosuggestResultsQueryRawResponse } from "__generated__/AutosuggestResultsQuery.graphql"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import { GlobalStore } from "lib/store/GlobalStore"
import { flushPromiseQueue } from "lib/tests/flushPromiseQueue"
import { renderWithWrappersTL } from "lib/tests/renderWithWrappers"
import React from "react"
import { RelayEnvironmentProvider } from "relay-hooks"
import { createMockEnvironment } from "relay-test-utils"
import { MyCollectionArtworkForm } from "./MyCollectionArtworkForm"

jest.unmock("react-relay")
jest.mock("lib/relay/createEnvironment", () => {
  return {
    defaultEnvironment: require("relay-test-utils").createMockEnvironment(),
  }
})
const mockEnvironment = defaultEnvironment as ReturnType<typeof createMockEnvironment>

describe("MyCollectionArtworkForm", () => {
  beforeEach(() => {
    mockEnvironment.mockClear()
  })

  describe("Editing an artwork", () => {
    it("renders the main form", async () => {
      const { getByText, getByTestId } = renderWithWrappersTL(
        <RelayEnvironmentProvider environment={mockEnvironment}>
          <MyCollectionArtworkForm
            artwork={mockArtwork as any}
            mode="edit"
            onSuccess={jest.fn()}
            onDelete={jest.fn()}
          />
        </RelayEnvironmentProvider>
      )

      act(() => GlobalStore.actions.myCollection.artwork.startEditingArtwork(mockArtwork as any))

      expect(getByTestId("TitleInput").props.value).toBe("Morons")
      expect(getByTestId("DateInput").props.value).toBe("2007")
      expect(getByTestId("MaterialsInput").props.value).toBe("Screen print")
      expect(getByTestId("WidthInput").props.value).toBe("30")
      expect(getByTestId("HeightInput").props.value).toBe("20")
      expect(getByTestId("DepthInput").props.value).toBe("40")
      expect(getByText("1 photo added")).toBeTruthy()
    })
  })

  describe("Adding a new artwork", () => {
    describe("when selecting an already existing artwork", () => {
      it("populates the form with the data from the artwork", async () => {
        const { getByText, getByTestId, getByPlaceholderText } = renderWithWrappersTL(
          <RelayEnvironmentProvider environment={mockEnvironment}>
            <MyCollectionArtworkForm mode="add" onSuccess={jest.fn()} />
          </RelayEnvironmentProvider>
        )

        // Select Artist Screen

        expect(getByText("Add Artwork")).toBeTruthy()

        act(() => fireEvent.changeText(getByPlaceholderText("Search for Artists on Artsy"), "banksy"))
        act(() => mockEnvironment.mock.resolveMostRecentOperation({ errors: [], data: mockArtistSearchResult }))
        act(() => fireEvent.press(getByTestId("autosuggest-search-result-Banksy")))

        await flushPromiseQueue()

        // Select Artwork Screen

        expect(getByText("Select an Artwork")).toBeTruthy()

        act(() => fireEvent.changeText(getByPlaceholderText("Search artworks"), "banksy"))
        act(() => mockEnvironment.mock.resolveMostRecentOperation({ errors: [], data: mockArtworkSearchResult }))
        act(() => fireEvent.press(getByText("Morons")))
        act(() => mockEnvironment.mock.resolveMostRecentOperation({ errors: [], data: mockArtworkResult }))

        await flushPromiseQueue()

        // Edit Details Screen

        expect(getByText("Add Details")).toBeTruthy()

        expect(getByTestId("TitleInput").props.value).toBe("Morons")
        expect(getByTestId("DateInput").props.value).toBe("2007")
        expect(getByTestId("MaterialsInput").props.value).toBe("Screen print")
        expect(getByTestId("WidthInput").props.value).toBe(30)
        expect(getByTestId("HeightInput").props.value).toBe(20)
        expect(getByTestId("DepthInput").props.value).toBe(40)
        expect(getByText("1 photo added")).toBeTruthy()

        // Complete Form

        act(() => fireEvent.press(getByTestId("CompleteButton")))
      })
    })

    describe("when skipping the artwork selection", () => {
      it("leaves the form empty", async () => {
        const { getByText, getByTestId, getByPlaceholderText } = renderWithWrappersTL(
          <RelayEnvironmentProvider environment={mockEnvironment}>
            <MyCollectionArtworkForm mode="add" onSuccess={jest.fn()} />
          </RelayEnvironmentProvider>
        )

        // Select Artist Screen

        expect(getByText("Add Artwork")).toBeTruthy()

        act(() => fireEvent.changeText(getByPlaceholderText("Search for Artists on Artsy"), "banksy"))
        act(() => mockEnvironment.mock.resolveMostRecentOperation({ errors: [], data: mockArtistSearchResult }))
        act(() => fireEvent.press(getByTestId("autosuggest-search-result-Banksy")))

        await flushPromiseQueue()

        // Select Artwork Screen

        expect(getByText("Select an Artwork")).toBeTruthy()

        act(() => fireEvent.press(getByText("Skip")))

        await flushPromiseQueue()

        // Edit Details Screen

        expect(getByText("Add Details")).toBeTruthy()

        expect(getByTestId("TitleInput").props.value).toBe("")
        expect(getByTestId("DateInput").props.value).toBe("")
        expect(getByTestId("MaterialsInput").props.value).toBe("")
        expect(getByTestId("WidthInput").props.value).toBe("")
        expect(getByTestId("HeightInput").props.value).toBe("")
        expect(getByTestId("DepthInput").props.value).toBe("")
      })
    })
  })
})

const mockArtworkSearchResult = {
  viewer: {
    artworks: {
      edges: [
        {
          __typename: "needs to be here",
          cursor: "page-1",
          node: {
            id: "QXJ0d29yazo2MTg5N2MxMWFlMmUzMzAwMGRjOTUwODg=",
            __typename: "Artwork",
            slug: "banksy-morons-unsigned-16",
            image: { aspectRatio: 1.4, url: "https://d32dm0rphc51dk.cloudfront.net/CwzH4uRDHZbb04u9eC3uhg/large.jpg" },
            title: "Morons",
            date: "2007",
            saleMessage: "Contact For Price",
            internalID: "61897c11ae2e33000dc95088",
            artistNames: "Banksy",
            href: "/artwork/banksy-morons-unsigned-16",
            sale: null,
            saleArtwork: null,
            partner: null,
          },
        },
      ],
      pageInfo: {
        startCursor: "page-1",
        endCursor: "page-2",
        hasNextPage: true,
      },
    },
  },
}

const mockArtistSearchResult: AutosuggestResultsQueryRawResponse = {
  results: {
    edges: [
      {
        cursor: "page-1",
        node: {
          __isNode: "SearchableItem",
          __typename: "SearchableItem",
          internalID: "",
          displayLabel: "Banksy",
          displayType: "Artist",
          href: "banksy-href",
          id: "banksy",
          imageUrl: "",
          slug: "banksy",
        },
      },
    ],
    pageInfo: {
      endCursor: "page-2",
      hasNextPage: true,
    },
  },
}

const mockArtworkResult = {
  artwork: {
    artist: {
      internalID: "4dd1584de0091e000100207c",
      formattedNationalityAndBirthday: "British",
    },
    artistNames: "Banksy",
    category: "Screen print",
    pricePaid: null,
    date: "2007",
    depth: 40,
    editionSize: null,
    editionNumber: null,
    height: 20,
    id: "QXJ0d29yazo2MWMwOTk4ZWU0YjZjMzAwMGI3NmJmYjE=",
    images: [
      {
        isDefault: true,
        imageURL: "https://d32dm0rphc51dk.cloudfront.net/h2pjCdc8kASLMsyjhHkXpw/:version.jpg",
        width: 640,
        height: 473,
        internalID: "61c0998ec9663e000b368462",
      },
    ],
    internalID: "61c0998ee4b6c3000b76bfb1",
    isEdition: true,
    medium: "Print",
    metric: "in",
    provenance: null,
    slug: "61c0998ee4b6c3000b76bfb1",
    title: "Morons",
    width: 30,
  },
}

const mockArtwork = {
  artist: {
    internalID: "4dd1584de0091e000100207c",
    formattedNationalityAndBirthday: "British",
  },
  artistNames: "Banksy",
  category: "Screen print",
  pricePaid: null,
  date: "2007",
  depth: "40",
  editionSize: null,
  editionNumber: null,
  height: "20",
  id: "QXJ0d29yazo2MWMwOTk4ZWU0YjZjMzAwMGI3NmJmYjE=",
  images: [
    {
      isDefault: true,
      imageURL: "https://d32dm0rphc51dk.cloudfront.net/h2pjCdc8kASLMsyjhHkXpw/:version.jpg",
      width: 640,
      height: 473,
      internalID: "61c0998ec9663e000b368462",
    },
  ],
  internalID: "61c0998ee4b6c3000b76bfb1",
  isEdition: true,
  medium: "Print",
  metric: "in",
  provenance: null,
  slug: "61c0998ee4b6c3000b76bfb1",
  title: "Morons",
  width: "30",
}
