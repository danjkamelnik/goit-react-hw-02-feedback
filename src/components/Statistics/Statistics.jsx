import { StatList, StatItem, StatItemTotal, PositiveFeedback } from "./Statistics.styled"

export const Statistics = ({good, bad, neutral, total, positiveFeedback}) => {
    return (
        <StatList>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItemTotal>Total: {total}</StatItemTotal>
          <PositiveFeedback>PositiveFeedback: {positiveFeedback}%</PositiveFeedback>
        </StatList>
    )
}