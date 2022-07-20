import styled from "styled-components"
import ItemCount from "../itemCount/ItemCount"

export const ItemListContainer = ({ greeting }) => {

  return (
   <>
      <Saludo>{ greeting }</Saludo> <br />
      <ItemCount/>
   </>
  )
}

export default ItemListContainer

const Saludo = styled.h1 `
   text-align: center;
      color:black;
`

