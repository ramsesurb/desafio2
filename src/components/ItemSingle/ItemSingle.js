import React from 'react'

function Itemdetail() {
  return (
    <div>
        <h1> Producto Detallado</h1>
        <hr/>
        <div className="container text-center p-3">
            <div className="row">
            <div className="col-sm-8 bg-primary">
             <img src={prod.images} alt="" />
             <hr/>
             <h2>descripcion</h2>
             <p> </p> 
             <h2>specs</h2>
             <p>Enim nostrud cillum fugiat cillum anim officia ipsum aliquip proident sunt deserunt nisi elit veniam. Laborum non enim pariatur qui. Reprehenderit anim aliqua ullamco nostrud pariatur reprehenderit. Do esse aliquip esse ipsum velit. Adipisicing nostrud ex anim excepteur nostrud nulla deserunt incididunt dolore id amet sint consequat tempor.</p>
            </div>
            <div className="col-sm-4 bg-warning">titulo + precio + contador</div>
            </div>
            <div div className="row">
            </div>
        </div>
    </div>
  )
}

export default Itemdetail