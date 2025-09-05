import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {

  const resultData = calculateInvestmentResults(input);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((dataYearPoint) => {
          const totalInterest = dataYearPoint.valueEndOfYear - dataYearPoint.annualInvestment * dataYearPoint.year - initialInvestment;
          const totalAmountInvested = dataYearPoint.valueEndOfYear - totalInterest;
          return (
            <tr key={dataYearPoint.year}>
              <td>{dataYearPoint.year}</td>
              <td>{formatter.format(dataYearPoint.valueEndOfYear)}</td>
              <td>{formatter.format(dataYearPoint.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
