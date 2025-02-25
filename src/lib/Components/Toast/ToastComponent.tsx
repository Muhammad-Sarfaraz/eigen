import { useActionSheet } from "@expo/react-native-action-sheet"
import { GlobalStore } from "lib/store/GlobalStore"
import { useScreenDimensions } from "lib/utils/useScreenDimensions"
import { Flex, Text, Touchable, useColor } from "palette"
import React, { useEffect, useState } from "react"
import { Animated } from "react-native"
import useTimeoutFn from "react-use/lib/useTimeoutFn"
import { ToastDetails } from "./types"

const AnimatedFlex = Animated.createAnimatedComponent(Flex)

const MIDDLE_TOAST_SIZE = 120
const EDGE_TOAST_HEIGHT = 60
const EDGE_TOAST_PADDING = 10
const NAVBAR_HEIGHT = 44

type ToastProps = ToastDetails

export const ToastComponent: React.FC<ToastProps> = ({ id, positionIndex, placement, message, onPress, Icon }) => {
  const color = useColor()
  const { width, height } = useScreenDimensions()
  const { top: topSafeAreaInset } = useScreenDimensions().safeAreaInsets
  const [opacityAnim] = useState(new Animated.Value(0))

  const { showActionSheetWithOptions } = useActionSheet()

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 150,
    }).start()
  }, [])

  useTimeoutFn(() => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 450,
    }).start(() => GlobalStore.actions.toast.remove(id))
  }, 2500)

  if (placement === "middle") {
    const innerMiddle = (
      <Flex flex={1} alignItems="center" justifyContent="center">
        {Icon !== undefined ? <Icon fill="white100" width={45} height={45} /> : null}
        <Text variant="xs" color="white100">
          {message}
        </Text>
      </Flex>
    )

    return (
      <AnimatedFlex
        width={MIDDLE_TOAST_SIZE}
        height={MIDDLE_TOAST_SIZE}
        position="absolute"
        top={(height - MIDDLE_TOAST_SIZE) / 2}
        left={(width - MIDDLE_TOAST_SIZE) / 2}
        backgroundColor={color("black100")}
        opacity={opacityAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.9] })}
        borderRadius={5}
        overflow="hidden"
      >
        {onPress !== undefined ? (
          <Touchable
            style={{ flex: 1 }}
            onPress={() => onPress({ id, showActionSheetWithOptions })}
            underlayColor={color("black60")}
          >
            {innerMiddle}
          </Touchable>
        ) : (
          innerMiddle
        )}
      </AnimatedFlex>
    )
  }

  const innerTopBottom = (
    <Flex flex={1} flexDirection="row" alignItems="center" mx="2">
      {Icon !== undefined ? <Icon fill="white100" width={25} height={25} mr="1" /> : null}
      <Text variant="xs" color="white100">
        {message}
      </Text>
    </Flex>
  )

  return (
    <AnimatedFlex
      position="absolute"
      left="1"
      right="1"
      height={EDGE_TOAST_HEIGHT}
      bottom={
        placement === "bottom"
          ? EDGE_TOAST_PADDING + positionIndex * (EDGE_TOAST_HEIGHT + EDGE_TOAST_PADDING)
          : undefined
      }
      top={
        placement === "top"
          ? topSafeAreaInset +
            NAVBAR_HEIGHT +
            EDGE_TOAST_PADDING +
            positionIndex * (EDGE_TOAST_HEIGHT + EDGE_TOAST_PADDING)
          : undefined
      }
      backgroundColor={color("black100")}
      opacity={opacityAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.9] })}
      borderRadius={5}
      overflow="hidden"
    >
      {onPress !== undefined ? (
        <Touchable
          style={{ flex: 1 }}
          onPress={() => onPress({ id, showActionSheetWithOptions })}
          underlayColor={color("black60")}
        >
          {innerTopBottom}
        </Touchable>
      ) : (
        innerTopBottom
      )}
    </AnimatedFlex>
  )
}
