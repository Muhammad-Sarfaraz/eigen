import { DecoratorFunction } from "@storybook/addons"
import { storiesOf } from "@storybook/react-native"
import { Flex } from "palette"
import React from "react"
import { withHooks } from "storybook/decorators"
import { ArtworkFiltersStoreProvider } from "../ArtworkFilter/ArtworkFilterStore"
import { useSelectedFiltersCount } from "../ArtworkFilter/useArtworkFilters"
import { ArtworksFilterHeader } from "./ArtworksFilterHeader"

export const withFilterProvider: DecoratorFunction<React.ReactNode> = (story) => (
  <ArtworkFiltersStoreProvider>{story()}</ArtworkFiltersStoreProvider>
)

storiesOf("ArtworkFilterHeader", module)
  .addDecorator(withHooks)
  .addDecorator(withFilterProvider)
  .add("Regular", () => {
    const selectedFiltersCount = useSelectedFiltersCount()
    return (
      <Flex mt={100}>
        {/* tslint:disable-next-line:no-empty */}
        <ArtworksFilterHeader selectedFiltersCount={selectedFiltersCount} onFilterPress={() => {}} />
      </Flex>
    )
  })
