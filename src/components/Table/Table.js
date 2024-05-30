import React from "react";
import "./Table.scss";
import { TableLayout } from "../../constants/TableLayout";

const Table = () => {
  return (
    <div className="table-container">
      <table className="tc-table">
        <thead>
          <tr>
            {TableLayout.header.map((headerItem, index) => (
              <th key={index} className="tct-header">
                {headerItem.content}
                {headerItem.hasDownArrow ? (
                  <i className="icon-caret-down"></i>
                ) : (
                  <i className="icon-caret-up"></i>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableLayout.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    width: cell.width,
                    minWidth: cell.takesFullWidth ? "100%" : "auto",
                    fontWeight: cell.isBold ? "bold" : "normal",
                  }}
                >
                  {cell.content}
                </td>
              ))}
              <td>
                <i className="icon-ellipsis-vertical"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {TableLayout.isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Table;
