import React from "react";
import Cities from "./Cities"

export default function ListView({
  refresh,
  isload,
  fetching,
  list,
  loadCityData,
}) {
  if (!isload) loadCityData()

  return (
    <>
      <button onClick={refresh}>Reload</button>
      <br />
      {!isload && <p>Loading</p>}
      {fetching && <p>Fetching....</p>}
      {list && <Cities cities={list} />}
    </>
  )
}
