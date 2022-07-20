import styled from "styled-components"
import { useState } from "react"
//useState =>  [0,1]

export const ItemListContainer = ({ greeting }) => {

   // const  [estado, setEstado] = useState(valorquetomaestado)
   const [ contador , actualizarContador ] = useState(1)
   const [ total, actualizarTotal ] = useState(0)

   
   // let count = 0
   const aumentar = () =>{
     /* count++ */
     if (contador >= 1 ){
        actualizarContador(contador + 1)
     }else{

     }

   }

   const disminuir = () =>{
      /* count-- */
      if (contador > 1 ){
         actualizarContador(contador - 1)
      } else{

      }
   }

   const totalPlan = () =>{
      actualizarTotal(contador * 100 )
   }


  return (
   <>
      <Saludo>{ greeting }</Saludo> <br />
      <Contador>
         <button onClick={disminuir}>-</button>
         <h2>{contador}</h2>
         <button onClick={aumentar}>+</button>
      </Contador>
      <ContenedorTotal>
         <button className="btn__total" onClick={totalPlan}>Total</button>
         <h2>{total}</h2>
      </ContenedorTotal>
   </>
  )
}

export default ItemListContainer

const Saludo = styled.h1 `
   text-align: center;
      color:black;
`

const Contador = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;

   button{
      margin: 0 1rem;
      height: 2rem;
      align-items: center;
   }   
`
const ContenedorTotal = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   button{
      margin: 0 1rem;
      height: 2rem;
      align-items: center;
   }

`