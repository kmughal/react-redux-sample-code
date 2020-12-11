import React from "react"
import { render } from "@testing-library/react"
import CityView from "./CityView"

describe("CityView tests", () => {
  it("isload is set to false then Loading content should appear", () => {
    const loadCityData = () => {
      return []
    }
    const { findAllByText } = render(
      <CityView isload={false} loadCityData={loadCityData} />
    )
    expect(findAllByText("Loading")).not.toBeNull()
  })
})
