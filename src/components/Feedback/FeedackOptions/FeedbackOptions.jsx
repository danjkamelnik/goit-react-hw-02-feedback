import PropTypes from 'prop-types';
import { BtnWrap, Btn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnWrap>
          {options.map(option => (
            <Btn key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </Btn>
          ))}
        </BtnWrap>
    )
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}