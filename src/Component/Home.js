import React from "react";
import { Table } from "react-bootstrap";

const Home = ({ data }) => {
  console.log("data", data);
  return (
    <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x) => {
          return (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.body}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Home;
