import {Ul, Li, Span, Button} from "./Contacts.styled"
import PropTypes from 'prop-types';
import { FaAddressCard } from "react-icons/fa";

export default function Contacts ({deleteFromlist, contactList}) {

const handleDelete = e =>{
    const id= e.currentTarget.id;
    deleteFromlist(id)
}

    return(
            <Ul>
                {contactList.map(el=>(
                    <Li key={el.id}>
                        <FaAddressCard/>
                        {el.name}: <Span>{el.number}</Span>
                    <Button type="button" id={el.id} onClick={handleDelete}>Delete</Button></Li>
                ))}
            </Ul>
        )

    
};


Contacts.propTypes={
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }).isRequired).isRequired,
    deleteFromlist: PropTypes.func.isRequired
}