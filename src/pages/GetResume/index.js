import React from "react";
import { Table } from "antd";

const index = () => {
  return (
    <>
      <div className="get_resume">
        <div className="form">
          <div className="form_heading" style={{ textAlign: "center" }}>
            <h2>This are the Applicants</h2>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody> </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default index;
