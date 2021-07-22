import React, { useState, useEffect } from "react";
import styles from "./BeerDetails.module.css";
import axios from "axios";

const BeerDetails = (props) => {
  const initialBeerState = {
    beer: {},
    loading: true
  };

  const [beer, setBeer] = useState(initialBeerState);

  useEffect(() => {
    const getBeer = async () => {
      const { data } = await axios(  `https://api.punkapi.com/v2/beers/${props.match.params.id}`
      );
      console.log(data);
      setBeer(data);
    };
    getBeer();
  }, [props.match.params.id]);




  return beer.loading ? (
    <div></div>
  ) : (
    <main className={styles.details}>
      <img className={styles.img}  src={beer[0].image_url}  alt={beer[0].name}  />
      <div className={styles.info}>
        <h2 className={styles.name}>{beer[0].name}</h2>
        <h3 className={styles.tagline}>{beer[0].tagline}</h3>
        <p className={styles.description}>{beer[0].description}</p>
        <h3 className={styles.abv}>ABV: {beer[0].abv}%</h3>
        <p className={styles.food}> Food pairs :<br />
          {beer[0].food_pairing[0]}
          <br />
          {beer[0].food_pairing[1]}
          <br />
          {beer[0].food_pairing[2]}
        </p>
      </div>
    </main>
  );
}
export default  BeerDetails;
