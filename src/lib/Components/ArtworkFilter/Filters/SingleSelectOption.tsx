import { ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { FilterData } from "lib/Components/ArtworkFilter/ArtworkFilterHelpers"
import { ArtworkFilterBackHeader } from "lib/Components/ArtworkFilter/components/ArtworkFilterBackHeader"
import { FancyModalHeader, FancyModalHeaderProps } from "lib/Components/FancyModal/FancyModalHeader"
import { TouchableRow } from "lib/Components/TouchableRow"
import { useFeatureFlag } from "lib/store/GlobalStore"
import { Flex, RadioDot, Text } from "palette"
import React, { Fragment } from "react"
import { FlatList, ScrollView } from "react-native"
import styled from "styled-components/native"

interface SingleSelectOptionScreenProps extends FancyModalHeaderProps {
  navigation: StackNavigationProp<ParamListBase>
  filterHeaderText: string
  onSelect: (any: any) => void
  selectedOption: FilterData
  filterOptions: Array<FilterData | JSX.Element>
  ListHeaderComponent?: JSX.Element
  withExtraPadding?: boolean
  useScrollView?: boolean
}

const isFilterData = (item: any): item is FilterData => {
  return "paramValue" in item
}

export const SingleSelectOptionScreen: React.FC<SingleSelectOptionScreenProps> = ({
  filterHeaderText,
  selectedOption,
  onSelect,
  filterOptions,
  navigation,
  ListHeaderComponent,
  withExtraPadding = false,
  useScrollView = false,
  ...rest
}) => {
  const isEnabledImprovedAlertsFlow = useFeatureFlag("AREnableImprovedAlertsFlow")
  const handleBackNavigation = () => {
    navigation.goBack()
  }
  const keyExtractor = (_item: FilterData | JSX.Element, index: number) => String(index)
  const renderItem = (item: FilterData | JSX.Element) => {
    if (isFilterData(item)) {
      return (
        <ListItem item={item} selectedOption={selectedOption} onSelect={onSelect} withExtraPadding={withExtraPadding} />
      )
    }

    // Otherwise just return JSX.Element
    return item
  }

  return (
    <Flex flexGrow={1}>
      {isEnabledImprovedAlertsFlow ? (
        <ArtworkFilterBackHeader
          title={filterHeaderText}
          onLeftButtonPress={handleBackNavigation}
          onRightButtonPress={rest.onRightButtonPress}
          rightButtonText={rest.rightButtonText}
        />
      ) : (
        <FancyModalHeader onLeftButtonPress={handleBackNavigation} {...rest}>
          {filterHeaderText}
        </FancyModalHeader>
      )}

      <Flex flexGrow={1}>
        {useScrollView ? (
          <ScrollView style={{ flex: 1 }}>
            {ListHeaderComponent}
            {filterOptions.map((item, index) => {
              return <Fragment key={keyExtractor(item, index)}>{renderItem(item)}</Fragment>
            })}
          </ScrollView>
        ) : (
          <FlatList
            style={{ flex: 1 }}
            initialNumToRender={100}
            ListHeaderComponent={ListHeaderComponent}
            keyExtractor={keyExtractor}
            data={filterOptions}
            ItemSeparatorComponent={null}
            renderItem={({ item }) => renderItem(item)}
          />
        )}
      </Flex>
    </Flex>
  )
}

export const ListItem = ({
  item,
  onSelect,
  selectedOption,
  withExtraPadding,
}: {
  item: FilterData
  onSelect: (any: any) => void
  selectedOption: FilterData
  withExtraPadding?: boolean
}) => {
  const selected = item.displayText === selectedOption.displayText

  return (
    <TouchableRow accessibilityState={{ selected }} onPress={() => onSelect(item)}>
      <OptionListItem>
        <InnerOptionListItem px={withExtraPadding && item.displayText !== "All" ? 3 : 2}>
          <Text color="black100" variant="xs">
            {item.displayText}
            {!!item.count && (
              <Text color="black60" variant="xs">
                {" "}
                ({item.count})
              </Text>
            )}
          </Text>
          <RadioDot selected={selected} />
        </InnerOptionListItem>
      </OptionListItem>
    </TouchableRow>
  )
}

export const InnerOptionListItem = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  height: 60px;
`

export const OptionListItem = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
