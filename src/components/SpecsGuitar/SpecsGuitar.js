import Table from 'react-bootstrap/Table';


function SpecsGuitar({item}) {
    
    
  return (
    <div>
        <h2> Specs</h2>
        <hr/>
        <h3> {item.name}  Specifications:</h3>
        <div className=' container' >
      <Table striped hover className='text-start'>
      <thead className='text-white'>
        <tr>spects
        <td>neck Wood  </td>
        <td>neck Wood  </td>
        <td>neck Wood  </td> 
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Type  </td>
          <td colSpan={5}> {item.type}</td>
        </tr>
        <tr>
          <td>Neck Wood  </td>
          <td colSpan={5}>{item.neckWood}</td>
        </tr>
        <tr>
          <td>Fret number:</td>
          <td colSpan={5}>{item.fretNumber}</td>
        </tr>
        <tr>
          <td>Color :  </td>
          <td colSpan={5}>{item.color}</td>
        </tr>
        <tr>
          <td>Orientation  </td>
          <td colSpan={5}>{item.orientation}</td>
        </tr>
        <tr>
          <td>Strings  </td>
          <td colSpan={5}>{item.strings}</td>
        </tr>
        <tr>
          <td>Neck Pickup  </td>
          <td colSpan={5}>{item.neckPickup}</td>
        </tr>
        <tr>
          <td>Middle Pickup  </td>
          <td colSpan={5}>{item.middlePickup}</td>
        </tr>
        <tr>
          <td>Bridge Pickup  </td>
          <td colSpan={5}>{item.bridgePickup}</td>
        </tr>
        <tr>
          <td>Country origin:  </td>
          <td colSpan={5}>{item.countryOrigin}</td>
        </tr>

      </tbody>
    </Table>
    </div>
    </div>
  );
}

export default SpecsGuitar;