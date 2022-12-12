import { H2 } from "./Notification.styled";
import PropTypes from 'prop-types';

export default function Notification({message}){
return (
            <H2>{message}</H2>
        )
};

Notification.propTypes={
    message: PropTypes.string.isRequired
}