import { useState, useEffect } from "react";

function ResultTable(props) {
  const dataItems = props.items;
  console.log(dataItems);
  let itemRows = null;
  if (dataItems) {
    itemRows = dataItems.map((item) => (
      <tr>
        <td>{item.year}</td>
        <td>{item.savingsEndOfYear}</td>
        <td>{item.yearlyInterest}</td>
        <td>{item.totalInterest}</td>
        <td>{item.yearlyContribution}</td>
      </tr>
    ));
  }

  return (
    /* Todo: Show below table conditionally (only once result data is available) */
    /* Show fallback text if no data is available */
    <>
      {!dataItems && <div className="header">No data to be displayed</div>}
      {dataItems && (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>{itemRows}</tbody>
        </table>
      )}
    </>
  );
}

export default ResultTable;
