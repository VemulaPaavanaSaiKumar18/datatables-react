import React from "react";

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export const Showtable = (props) => {
  $(document).ready(function () {
    $("#table_id").DataTable({
      retrieve: true,
      data: props.data,
      columns: [
        { data: "id" },
        { data: "name" },
        { data: "email" },
        { data: "body" },
      ],
    });
  });
  // console.log(props.item);
  return (
    <div>
      <table id="table_id">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        {/* <tbody>
          {props.item.map((result) => {
            return (
              <tr>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.email}</td>
                <td>{result.body}</td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};
