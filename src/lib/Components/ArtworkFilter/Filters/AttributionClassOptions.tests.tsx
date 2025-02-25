import { FilterParamName } from "lib/Components/ArtworkFilter/ArtworkFilterHelpers"
import { ArtworkFiltersState, ArtworkFiltersStoreProvider } from "lib/Components/ArtworkFilter/ArtworkFilterStore"
import { MockFilterScreen } from "lib/Components/ArtworkFilter/FilterTestHelper"
import { renderWithWrappersTL } from "lib/tests/renderWithWrappers"
import React from "react"
import { AttributionClassOptionsScreen } from "./AttributionClassOptions"
import { getEssentialProps } from "./helper"

describe("AttributionClassOptions Screen", () => {
  const MockAttributionClassOptionsScreen = ({ initialData }: { initialData?: ArtworkFiltersState }) => {
    return (
      <ArtworkFiltersStoreProvider initialData={initialData}>
        <AttributionClassOptionsScreen {...getEssentialProps()} />
      </ArtworkFiltersStoreProvider>
    )
  }

  it("renders the options", () => {
    const { getByText } = renderWithWrappersTL(<MockAttributionClassOptionsScreen />)

    expect(getByText("Unique")).toBeTruthy()
    expect(getByText("Limited Edition")).toBeTruthy()
    expect(getByText("Open Edition")).toBeTruthy()
    expect(getByText("Unknown Edition")).toBeTruthy()
  })

  it("displays all the selected filters on the filter modal screen", () => {
    const injectedState: ArtworkFiltersState = {
      selectedFilters: [
        {
          displayText: "Unique, Unknown Edition",
          paramName: FilterParamName.attributionClass,
          paramValue: ["unique", "unknown edition"],
        },
      ],
      appliedFilters: [],
      previouslyAppliedFilters: [],
      applyFilters: false,
      aggregations: [],
      filterType: "artwork",
      counts: {
        total: null,
        followedArtists: null,
      },
    }

    const { getByText } = renderWithWrappersTL(<MockFilterScreen initialState={injectedState} />)

    expect(getByText("Rarity • 2")).toBeTruthy()
  })

  it("toggles selected filters 'ON' and unselected filters 'OFF", () => {
    const injectedState: ArtworkFiltersState = {
      selectedFilters: [
        {
          displayText: "Unique, Unknown Edition",
          paramName: FilterParamName.attributionClass,
          paramValue: ["unique", "unknown edition"],
        },
      ],
      appliedFilters: [],
      previouslyAppliedFilters: [],
      applyFilters: false,
      aggregations: [],
      filterType: "artwork",
      counts: {
        total: null,
        followedArtists: null,
      },
    }

    const { getAllByA11yState } = renderWithWrappersTL(
      <MockAttributionClassOptionsScreen initialData={injectedState} />
    )
    const options = getAllByA11yState({ checked: true })

    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent("Unique")
    expect(options[1]).toHaveTextContent("Unknown Edition")
  })
})
