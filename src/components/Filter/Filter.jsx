import {Label, Input} from "./Filter.styled"
import PropTypes from 'prop-types';


export default function Filter ({newFilter}){
   const onChangeInput = (e) => {
        const value = e.currentTarget.value.toLowerCase();
        newFilter( value );
      }
    return ( <Label>
        Find contacts by name
        <Input
        type="text"
        name="Filter"
        onChange={onChangeInput}
        />
        </Label>)
    
}



Filter.propTypes={
    newFilter: PropTypes.func.isRequired
}