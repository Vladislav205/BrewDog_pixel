import React, {  useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchForm from '../Search/Search';
import styles from './Beerlist.module.css';
import axios from "axios";

const Beerlist = () => {

	const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");




useEffect(() => {
  const getBeers = async () => {
		let url
    (query !== "") ? url = `&beer_name=${query}` : url = "";
    const { data } = await axios(`https://api.punkapi.com/v2/beers?page=1&per_page=80${url}`);
    setBeers(data);
  };
	getBeers();
}, [query]);

  const updateSearch = temp => {
    setSearch(temp.target.value);
  }

  const getSearch = temp => {
    temp.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const ascABV = beers.slice().sort((a, b) => a.abv - b.abv);
  const descABV = beers.slice().sort((a, b) => b.abv - a.abv);
  const ascName = beers.slice().sort((a, b) => a.name.localeCompare(b.name));
  const descName = beers.slice().sort((a, b) => b.name.localeCompare(a.name));

  const updateSortABV = temp => {
    temp.preventDefault();
    setBeers(ascABV);
  }

  const updateSortABVdesc = temp => {
    temp.preventDefault();
    setBeers(descABV);
  }

  const updateSortName = temp => {
    temp.preventDefault();
    setBeers(ascName);
  }

  const updateSortNamedesc = temp => {
    temp.preventDefault();
    setBeers(descName);
  }

		return (
			<div className={styles.mainContainer}>
				<SearchForm
          search={search}
          getSearch={getSearch}
          updateSearch={updateSearch}
          updateSortName={updateSortName}
          updateSortNamedesc={updateSortNamedesc}
          updateSortABV={updateSortABV}
          updateSortABVdesc={updateSortABVdesc}
        />
			<div className={styles.beerContainer}>
				{beers.map(beer => (
					<Link aria-hidden="true" className={styles.mainContainerBeer} to={`${beer.id}`}>
						<div key={beer.id}>
							<img className={styles.image} src={beer.image_url} alt={beer.name} />
								<div className={styles.name}>
								{beer.name}
								</div>
								<div className={styles.abv}>
									{beer.abv}
								 	ABV
								 </div>
						</div>
					</Link>
				))}
			</div>
		</div>
		);
	}


export default Beerlist;
