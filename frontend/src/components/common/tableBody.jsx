import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  //   renderCell = (item, column) => {
  //     if (column.content) return column.content(item);
  //     return _.get(item, column.path);
  //   };

  render() {
    const { data, columns, valueProperty } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[valueProperty]}>
            {columns.map((column) => (
              <td key={column.path}>{_.get(item, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  valueProperty: "_id",
};
export default TableBody;
