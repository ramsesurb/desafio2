import ItemCounter from "../CounterButton/CounterButton"

export const ItemListContainer = ({titulo}) => {

    return (
        <div>
           <h1>
            {titulo}
           </h1>
           <ItemCounter/>

        </div>
    )
}