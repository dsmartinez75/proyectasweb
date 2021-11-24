import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CardComments } from "../UI/CardComments";

// import { act } from "react-dom/test-utils";
export const Comments = () => {
  const [planets, setplanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actual, setActual] = useState(`https://swapi.dev/api/planets/?page=1`);

  const fetchplanets = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchplanets(actual, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results } = data;

        // console.log(results);
        setLoading(true);
        setplanets(results);
        // console.log(previous, actual, next);
      });
  }, [actual]);

  return (
      <div className="container-fluid body_info">
        <div className="box">
          {loading ? (
            planets.map((planets) => {
              // console.log(url);
              return <CardComments planets={planets} key={planets.url} />;
            })
          ) : (
            <ReactBootStrap.Spinner animation="grow" variant="warning" />
          )}
          {}
        </div>
      </div>
  );
};