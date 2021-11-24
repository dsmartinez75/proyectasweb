import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CardProduct } from "./UI/CardProduct";

// import { act } from "react-dom/test-utils";
export const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actual, setActual] = useState(`https://swapi.dev/api/people/?page=1`);

  const fetchPeople = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchPeople(actual, {
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
        setPeople(results);
        // console.log(previous, actual, next);
      });
  }, [actual]);

  return (
      <div className="container-fluid body_info">
        <div className="box">
          {loading ? (
            people.map((people) => {
              // console.log(url);
              return <CardProduct people={people} key={people.url} />;
            })
          ) : (
            <ReactBootStrap.Spinner animation="grow" variant="warning" />
          )}
          {}
        </div>
      </div>
  );
};