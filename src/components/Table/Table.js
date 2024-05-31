import React, { useState } from "react";
import "./Table.scss";
import { TableLayout } from "../../constants/TableLayout";

const Table = () => {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handlePopupToggle = (index) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  const handleBlur = (index) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null);
    }
  };

  return (
    <div className="table-container">
      <table className="tc-table">
        <thead className="tct-head">
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
                <div
                  className="popup-content"
                  tabIndex={0}
                  onBlur={() => handleBlur(rowIndex)}
                  onClick={() => handlePopupToggle(rowIndex)}
                >
                  <i className="icon-ellipsis-vertical" />
                  {openPopupIndex === rowIndex && <PopupOptions />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {TableLayout.isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

const PopupOptions = () => {
  return (
    <div className="popup-comp">
      <div className="pc-sec">
        <i className="icon-pen-to-square"></i>
        <div className="pcs-text">Edit</div>
      </div>
      <div className="pc-sec">
        <i className="icon-delete"></i>
        <div className="pcs-text">Delete</div>
      </div>
    </div>
  );
};

export default Table;
