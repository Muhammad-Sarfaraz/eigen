import { storiesOf } from "@storybook/react-native"
import SearchIcon from "lib/Icons/SearchIcon"
import { Box, Input } from "palette"
import React from "react"
import { withTheme } from "storybook/decorators"
import { DList, List } from "storybook/helpers"

storiesOf("Input", module)
  .addDecorator(withTheme)
  .add("Variants", () => (
    <List contentContainerStyle={{ marginHorizontal: 20, alignItems: "stretch" }}>
      <Input />
      <Input title="Title" />
      <Input title="Title" required />
      <Input title="Title" optional />
      <Input title="Title" description="Subtitle" optional />
      <Input title="Title" description="With clear button" enableClearButton />
      <Input title="Title" description="With loading" loading />
      <Input title="Title" description="With icon" icon={<SearchIcon />} />
      <Input title="Title" description="With error" error="this is an error" />
      <Input title="Required" required />
      <Input title="Disabled" disabled />
      <Input placeholder="I'm a placeholder" />
      <Input title="full text" value="Wow this is a long text, I wonder if I can read the whole thing!" />
      <Input title="Text with limit" maxLength={100} showLimit />
      <Input title="Text area" multiline />
      <Input title="Text area with limit" multiline maxLength={150} showLimit />
    </List>
  ))
  .add("Multiple placeholders", () => {
    const placeholders = [
      "this is a very long placeholder",
      "this is slightly shorter",
      "how about this one",
      "much shorter",
      "even more",
    ]
    return (
      <DList
        contentContainerStyle={{ marginHorizontal: 20, alignItems: "flex-start" }}
        data={[350, 300, 250, 200, 170, 150, 100]}
        renderItem={({ item: width }) => (
          <Box width={width}>
            <Input placeholder={placeholders} />
          </Box>
        )}
      />
    )
  })
