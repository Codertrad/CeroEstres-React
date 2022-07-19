import styled from "styled-components"

export const ItemListContainer = ({ greeting }) => {
  return (
      <Saludo>
         <h1 className="title">{ greeting }</h1>
      </Saludo>
  )
}

export default ItemListContainer

const Saludo = styled.h1 `
   
   .title{
      text-align: center;
      color:black;
   }
`
