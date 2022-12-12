import { H2, SectionTag } from "./Section.styled";
import PropTypes from 'prop-types';

export default function Section ({title,children}){
 return(
            <SectionTag>
                {title&&<H2>{title}</H2>}
                {children}
            </SectionTag>
        )
};
Section.propTypes={
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}