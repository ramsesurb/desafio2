import Table from 'react-bootstrap/Table';


function SpecsAmp({item}) {
   
    
  return (
    <div>
        <h2> amps</h2>
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
          <td>Type:  </td>
          <td colSpan={5}> {item.type}</td>
        </tr>
        <tr>
          <td>Power:  </td>
          <td colSpan={5}>{item.power}</td>
        </tr>
        <tr>
          <td>Speaker:</td>
          <td colSpan={5}>{item.speaker}</td>
        </tr>
        <tr>
          <td>Usb :  </td>
          <td colSpan={5}>{item.usb}</td>
        </tr>
        <tr>
          <td>Brand  </td>
          <td colSpan={5}>{item.brand}</td>
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

export default SpecsAmp;