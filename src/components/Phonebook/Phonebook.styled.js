import styled from 'styled-components';

export const Label =styled.label`
display: flex;
flex-direction: column;
font-family: 'Amatic SC', cursive;
color:  #c68642;
font-size: 20px;
gap: 5px;
padding-bottom: 10px;
`
export const Input = styled.input`
width: 200px;
border: 2px #e0ac69 solid;
border-radius: 3px;
font-family: 'Abel', sans-serif;
font-size: 18px;
`

export const Button = styled.button`
margin-top: 5px ;
background-color: #c68642;
color: #ffdbac;
cursor: pointer;
font-family: 'Abel', sans-serif;
padding: 7px 5px;
border: 2px transparent solid;
border-radius: 5px;
&:hover{
   background-color: #8d5524 ;
}
`