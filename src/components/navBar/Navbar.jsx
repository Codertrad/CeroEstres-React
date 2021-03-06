import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import CartWidget from './CartWidget'
import logoCero from '../../images/logo_cero.png'


function Navbar() {

   const [clicked, setClicked] = useState(false)
   const handleClick = () =>{
      //Cuando esta true lo pasa a false y viceversa
      setClicked(!clicked)
   }

  return (
   <>
   <NavContainer>
      <img src={logoCero} className='logoPage' alt=''/>
      <div className={`links ${clicked ? 'active' : '' }`}>
         <a onClick={handleClick} href="#h">Inicio</a>
         <a onClick={handleClick} href="#h">Planes turisticos</a>
         <a onClick={handleClick} href="#h">Actividades</a>
         <a onClick={handleClick} href="#h">Blog</a>
         <CartWidget handleClick = {handleClick}/>
      </div>
      <div className='burguer'>
         <BurguerButton clicked={clicked} handleClick={handleClick}/>
      </div>
      <BgDiv className={`initial ${clicked ? 'active' : '' }`}></BgDiv>
   </NavContainer>
   </>
  )
}

export default Navbar

const NavContainer = styled.nav `
   .logoPage{
      width: 6rem ;
      position: relative;
      top: 1.5rem;
   }
   padding: .4rem 2rem;
   background-color: #333;
   display: flex;
   align-items: center;
   justify-content: space-between;
   //margin: 0 3rem;

   a{
      color: white;
      text-decoration: none;
      margin-right: 1rem;
   }
   .links{
      position: absolute;
      top:-700px;
      left:-2000px;
      right: 0;
      margin-left:auto;
      margin-right:auto;
      text-align:center;
      transition: all .5s ease;
      a{
         color: white;
         font-size: 2rem;
         display: block;
      }
      @media(min-width: 768px){
         position: initial;
         margin: 0;
         a{
            font-size: 1.3rem;
            color: white;
            display: inline;
         }
      }
   }
   .links.active{
      width:100%;
      display:block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;
      a{
         font-size: 2rem;
         margin-top: 1rem;
         color: white;
      }
      
   }
   .burguer{
      @media(min-width:768px ){
         display:none;
      }
   }
`

const BgDiv = styled.div`
   position: absolute;
   background-color: #222 ;
   top: -1000px;
   left: -1000px;
   width: 100%;
   height: 100%;
   z-index: -1;
   transition: all .6s ease ;
   &.active{
      border-radius: 0 0 80% 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
   }
`