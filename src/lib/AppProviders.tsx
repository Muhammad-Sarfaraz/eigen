import { ActionSheetProvider } from "@expo/react-native-action-sheet"
import AddressNotificationsProvider from "lib/utils/AddressNotificationProvider"
import { Theme } from "palette"
import React, { ReactNode } from "react"
import { RelayEnvironmentProvider } from "relay-hooks"
import { _FancyModalPageWrapper } from "./Components/FancyModal/FancyModalContext"
import { PopoverMessageProvider } from "./Components/PopoverMessage/PopoverMessageProvider"
import { ToastProvider } from "./Components/Toast/toastHook"
import { defaultEnvironment } from "./relay/createEnvironment"
import { GlobalStoreProvider } from "./store/GlobalStore"
import { ProvideScreenDimensions } from "./utils/useScreenDimensions"

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <RelayEnvironmentProvider environment={defaultEnvironment}>
    <ProvideScreenDimensions>
      <GlobalStoreProvider>
        <Theme>
          <ActionSheetProvider>
            <PopoverMessageProvider>
              <_FancyModalPageWrapper>
                <ToastProvider>
                  <AddressNotificationsProvider>{children}</AddressNotificationsProvider>
                </ToastProvider>
              </_FancyModalPageWrapper>
            </PopoverMessageProvider>
          </ActionSheetProvider>
        </Theme>
      </GlobalStoreProvider>
    </ProvideScreenDimensions>
  </RelayEnvironmentProvider>
)
