import PropTypes from 'prop-types';
import { TitleWrap, Title } from "./Section.styled"

export const Section = ({title, children}) => {
    return (
        <TitleWrap>
            <Title>{title}</Title>
            {children}
        </TitleWrap>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}