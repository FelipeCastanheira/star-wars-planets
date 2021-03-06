import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import { getOrder, isPlanetCorrect } from '../services/functions';

function Table() {
  const { data, filterByName, filterByNumericValues, order } = useContext(SWContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { data.filter((planet) => planet.name.includes(filterByName.name)
          && filterByNumericValues
            .every((filter) => isPlanetCorrect(filter, planet)))
          .sort((a, b) => getOrder(a, b, order))
          .map((planet) => {
            const { name,
              climate,
              created,
              diameter,
              edited,
              films,
              gravity,
              orbital_period: orbitalPeriod,
              population,
              rotation_period: rotationPeriod,
              surface_water: surfaceWater,
              terrain,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td data-testid="planet-name">{ name }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>);
          })}
      </tbody>
    </table>
  );
}

export default Table;
