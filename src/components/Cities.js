export default ({ cities }) => (
  <ul>
    {cities.map((city, index) => (
      <li key={index}>{city.matching_full_name}</li>
    ))}
  </ul>
)
