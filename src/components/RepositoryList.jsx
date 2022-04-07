import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

// interface Repository {
//   name: string,
//   description: string,
//   html_url: string,
// }
const repository = {
  name: "unform",
  escription: "Forms in React",
  html_url: "https://github.com/unform/unform",
};
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
