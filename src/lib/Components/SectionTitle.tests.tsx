import { extractText } from "lib/tests/extractText"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import { ArrowRightIcon } from "palette"
import React from "react"
import { SectionTitle } from "./SectionTitle"

describe("SectionTitle", () => {
  it(`renders a title alone`, async () => {
    const tree = renderWithWrappers(<SectionTitle title="hello" />)

    expect(extractText(tree.root)).toContain("hello")
    expect(tree.root.findAllByType(ArrowRightIcon)).toHaveLength(0)
    expect(tree.root.findAllByProps({ testID: "subtitle" })).toHaveLength(0)
  })

  it(`renders a subtitle when specified`, async () => {
    const tree = renderWithWrappers(<SectionTitle title="hello" subtitle="welcome to test" />)

    expect(extractText(tree.root.findByProps({ testID: "title" }))).toContain("hello")
    expect(extractText(tree.root.findByProps({ testID: "subtitle" }))).toBe("welcome to test")
    expect(tree.root.findAllByType(ArrowRightIcon)).toHaveLength(0)
  })

  it(`renders a right arrow when given an 'onPress' prop`, async () => {
    const onPress = jest.fn()
    const tree = renderWithWrappers(<SectionTitle title="hello" subtitle="welcome to test" onPress={onPress} />)

    expect(extractText(tree.root.findByProps({ testID: "title" }))).toContain("hello")
    expect(extractText(tree.root.findByProps({ testID: "subtitle" }))).toBe("welcome to test")
    expect(tree.root.findAllByType(ArrowRightIcon)).toHaveLength(1)
    tree.root.findByProps({ testID: "touchable-wrapper" }).props.onPress()
    expect(onPress).toHaveBeenCalled()
  })
})
