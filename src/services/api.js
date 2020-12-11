const _fetch = Symbol("private_fetch")

export default class Api {
  baseUrl = "https://api.teleport.org/api/"

  async getCities() {
    const data = await this[_fetch]("cities")
    const result = data._embedded["city:search-results"]
    return result
  }

  async [_fetch](endPoint) {
    const response = await fetch(`${this.baseUrl}/${endPoint}`)
    if (response.ok) {
      const json = await response.json()
      return json
    }
    throw new Error(`${endPoint} just failed`)
  }
}
