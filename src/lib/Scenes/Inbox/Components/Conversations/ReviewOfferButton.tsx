import { tappedViewOffer } from "@artsy/cohesion"
import { navigate } from "lib/navigation/navigate"
import { useEventTiming } from "lib/utils/useEventTiming"
import { DateTime } from "luxon"
import { AlertCircleFillIcon, ArrowRightIcon, Color, Flex, IconProps, MoneyFillIcon, Text } from "palette"
import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import { useTracking } from "react-tracking"

export interface ReviewOfferButtonProps {
  conversationID: string
  kind: ReviewOfferCTAKind
  activeOrder: {
    internalID: string
    stateExpiresAt: string | null
    lastOffer?: { createdAt: string } | null
    offers?: { edges: { length: number } | null } | null
  }
}

export type ReviewOfferCTAKind =
  | "PAYMENT_FAILED"
  | "OFFER_RECEIVED"
  | "OFFER_ACCEPTED"
  | "OFFER_ACCEPTED_CONFIRM_NEEDED"
  | "OFFER_RECEIVED_CONFIRM_NEEDED"
  | "PROVISIONAL_OFFER_ACCEPTED"

export const ReviewOfferButton: React.FC<ReviewOfferButtonProps> = ({ conversationID, activeOrder, kind }) => {
  const { internalID: orderID, offers } = activeOrder
  const { trackEvent } = useTracking()

  const { hoursTillEnd, minutes } = useEventTiming({
    currentTime: DateTime.local().toString(),
    startAt: activeOrder.lastOffer?.createdAt,
    endAt: activeOrder.stateExpiresAt || undefined,
  })

  const expiresIn = Number(hoursTillEnd) < 1 ? `${minutes}m` : `${Math.round(hoursTillEnd)}hr`
  const offerType = (offers?.edges?.length || []) > 1 ? "Counteroffer" : "Offer"

  let ctaAttributes: {
    backgroundColor: Color
    message: string
    subMessage: string
    Icon: React.FC<IconProps>
    url: string
    modalTitle: string
  }

  switch (kind) {
    case "PAYMENT_FAILED": {
      ctaAttributes = {
        backgroundColor: "red100",
        message: "Payment Failed",
        subMessage: "Unable to process payment for accepted offer. Update payment method.",
        Icon: AlertCircleFillIcon,
        url: `/orders/${orderID}/payment/new`,
        modalTitle: "Update Payment Details",
      }
      break
    }
    case "OFFER_RECEIVED": {
      ctaAttributes = {
        backgroundColor: "copper100",
        message: `${offerType} Received`,
        subMessage: `The offer expires in ${expiresIn}`,
        Icon: AlertCircleFillIcon,
        url: `/orders/${orderID}`,
        modalTitle: "Review Offer",
      }
      break
    }
    case "OFFER_ACCEPTED": {
      ctaAttributes = {
        backgroundColor: "green100",
        message: `Congratulations! ${offerType} Accepted`,
        subMessage: "Tap to view",
        Icon: MoneyFillIcon,
        url: `/orders/${orderID}`,
        modalTitle: "Offer Accepted",
      }
      break
    }
    case "OFFER_ACCEPTED_CONFIRM_NEEDED": {
      ctaAttributes = {
        backgroundColor: "copper100",
        message: `Offer Accepted - Confirm total`,
        subMessage: `The offer expires in ${expiresIn}`,
        Icon: AlertCircleFillIcon,
        url: `/orders/${orderID}`,
        modalTitle: "Review Offer",
      }
      break
    }
    case "OFFER_RECEIVED_CONFIRM_NEEDED": {
      ctaAttributes = {
        backgroundColor: "copper100",
        message: `Counteroffer Received - Confirm Total`,
        subMessage: `The offer expires in ${expiresIn}`,
        Icon: AlertCircleFillIcon,
        url: `/orders/${orderID}`,
        modalTitle: "Review Offer",
      }
      break
    }
    case "PROVISIONAL_OFFER_ACCEPTED": {
      ctaAttributes = {
        backgroundColor: "green100",
        message: `Offer Accepted`,
        subMessage: "Tap to view",
        Icon: MoneyFillIcon,
        url: `/orders/${orderID}`,
        modalTitle: "Offer Accepted",
      }
      break
    }
    default: {
      // this should never happen
      return null
    }
  }

  const { message, subMessage, backgroundColor, Icon, url, modalTitle } = ctaAttributes

  const navigateToConversation = (path: string, title: string) => {
    trackEvent(
      tappedViewOffer({
        impulse_conversation_id: conversationID,
        cta: message,
      })
    )
    navigate(path, {
      modal: true,
      passProps: { orderID, title },
    })
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigateToConversation(url, modalTitle)
      }}
    >
      <Flex
        px={2}
        py={1}
        justifyContent="space-between"
        alignItems="center"
        bg={backgroundColor}
        flexDirection="row"
        minHeight={60}
      >
        <Flex flexDirection="row">
          <Icon mt="3px" fill="white100" />
          <Flex flexDirection="column" pl={1}>
            <Text color="white100" variant="sm">
              {message}
            </Text>
            <Text color="white100" variant="xs">
              {subMessage}
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <ArrowRightIcon fill="white100" />
        </Flex>
      </Flex>
    </TouchableWithoutFeedback>
  )
}
