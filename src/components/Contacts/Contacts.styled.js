import styled from 'styled-components';

export const Ul = styled.ul`
margin: 0 ;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
gap: 15px;

`
export const Li = styled.li`
padding: 7px;
display: flex;
gap: 10px;
width: fit-content;
min-width: 280px;
color: #8d5524;
font-family: 'Abel', sans-serif;
font-size: 18px;
align-items: center;
border: 2px #8d5524  solid;
border-radius: 5px;
flex-grow: 1;
`
export const Span = styled.span`
color: #c68642;
font-size: 18px;
`

export const Button = styled.button`
padding: 5px ;
font-size: 12px;
background-color:  #e0ac69;
color: #ffdbac;
border: none;
border-radius: 3px;
&:hover{
    background-color: #8d5524;
}
`