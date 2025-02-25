import { themeGet } from "@styled-system/theme-get"
import { ViewingRoomViewWorksButton_viewingRoom } from "__generated__/ViewingRoomViewWorksButton_viewingRoom.graphql"
import { AnimatedBottomButton } from "lib/Components/AnimatedBottomButton"
import { navigate } from "lib/navigation/navigate"
import { Schema } from "lib/utils/track"
import { Flex, Sans } from "palette"
import React from "react"
import { View } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { useTracking } from "react-tracking"
import styled from "styled-components/native"

interface ViewingRoomViewWorksButtonProps {
  viewingRoom: ViewingRoomViewWorksButton_viewingRoom
  isVisible: boolean
}

export const ViewingRoomViewWorksButton: React.FC<ViewingRoomViewWorksButtonProps> = (props) => {
  const { viewingRoom } = props
  const tracking = useTracking()
  const artworksCount = viewingRoom.artworksForCount?.totalCount

  if (artworksCount === 0) {
    return null
  }

  const pluralizedArtworksCount = artworksCount === 1 ? "work" : "works"

  const roundedButtonStyle = { borderRadius: 20 }

  return (
    <View>
      <AnimatedBottomButton
        buttonStyles={roundedButtonStyle}
        isVisible={props.isVisible}
        onPress={() => {
          tracking.trackEvent(tracks.tappedViewWorksButton(viewingRoom.internalID, viewingRoom.slug))
          navigate(`/viewing-room/${viewingRoom.slug}/artworks`)
        }}
      >
        <ViewWorksButton testID="view-works" px="2">
          <Sans size="3t" py="1" color="white100" weight="medium">
            View {pluralizedArtworksCount} ({artworksCount})
          </Sans>
        </ViewWorksButton>
      </AnimatedBottomButton>
    </View>
  )
}

const ViewWorksButton = styled(Flex)`
  border-radius: 20;
  background-color: ${themeGet("colors.black100")};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12);
`

export const tracks = {
  tappedViewWorksButton: (id: string, slug: string) => {
    return {
      action: Schema.ActionNames.TappedViewWorksButton,
      context_screen_owner_type: Schema.OwnerEntityTypes.ViewingRoom,
      context_screen_owner_id: id,
      context_screen_owner_slug: slug,
      destination_screen: Schema.PageNames.ViewingRoomArtworks,
      destination_screen_owner_id: id,
      destination_screen_owner_slug: slug,
    }
  },
}

export const ViewingRoomViewWorksButtonContainer = createFragmentContainer(ViewingRoomViewWorksButton, {
  viewingRoom: graphql`
    fragment ViewingRoomViewWorksButton_viewingRoom on ViewingRoom {
      slug
      internalID
      artworksForCount: artworksConnection(first: 1) {
        totalCount
      }
    }
  `,
})
