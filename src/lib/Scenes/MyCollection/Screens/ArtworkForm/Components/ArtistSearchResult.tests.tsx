import OpaqueImageView from "lib/Components/OpaqueImageView/OpaqueImageView"
import { AutosuggestResult } from "lib/Scenes/Search/AutosuggestResults"
import { GlobalStore } from "lib/store/GlobalStore"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import { Button } from "palette"
import React from "react"
import { ArtistSearchResult } from "./ArtistSearchResult"

describe("ArtistSearchResult", () => {
  const displayLabel = "some display label"
  const result = {
    imageUrl: "",
    displayLabel,
  }

  it("renders correct components", () => {
    const wrapper = renderWithWrappers(<ArtistSearchResult result={result as AutosuggestResult} />)
    expect(wrapper.root.findByType(OpaqueImageView)).toBeDefined()
    expect(wrapper.root.findByType(Button)).toBeDefined()
    expect(wrapper.root.findByProps({ testID: "displayLabel" }).props.children).toEqual("some display label")
  })

  it("sets the search results to null on remove button click", () => {
    const spy = jest.fn()
    GlobalStore.actions.myCollection.artwork.setArtistSearchResult = spy as any
    const wrapper = renderWithWrappers(<ArtistSearchResult result={result as AutosuggestResult} />)
    wrapper.root.findByType(Button).props.onPress()
    expect(spy).toHaveBeenCalled()
  })
})
