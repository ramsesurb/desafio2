import { Link } from 'react-router-dom';

function NavList() {
  return (
    <div className='container'>
    <h3 className='p-1'>Category</h3>
    <div className="list-group">
    <Link to="/productos"  className=' list-group-item list-group-item-action  header-navlink text-decoration-none text-dark '>All</Link>
    <Link to="/productos/guitar"  className=' list-group-item list-group-item-action  header-navlink text-decoration-none text-dark '>Electric Guitars</Link>
    <Link to='/productos/amp'  className=' list-group-item list-group-item-action    header-navlink text-decoration-none text-dark'>Amplifiers</Link>
    <Link to='/productos/acoustic'  className='list-group-item list-group-item-action    header-navlink text-decoration-none text-dark'>Acoustic Guitars</Link>
    </div>
    </div>
  );
}

export default NavList;