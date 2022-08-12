import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import { createFilterOptions } from '@mui/material/Autocomplete';

const vehicleOptions = ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem"];
const filterOptions = createFilterOptions({
  matchFrom: 'start',
});

class TruckloadsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      origin: "",
      destination: "",
      vehicle: "",
    };
  }

  getCitiesList() {
    axios
      .get("/api/cities")
      .then((res) => {
        this.setState({
          cities: res.data.map((c) => `${c.name} - ${c.uf}`)
        });
      })
      .catch((error) => console.log(error));
  }

  search = (e) => {
    e.preventDefault();

    const params = { };

    this.props.router.push({
      pathname: '/cargas',
      params
    })
  }

  urlWithParams() {
    const { origin, destination, vehicle } = this.state;

    let url = "/cargas?"
    if (origin) { url = url + `origin=${ origin }&` }
    if (destination) { url = url + `&destination=${ destination }&` }
    if (vehicle) { url = url + `vehicle=${ vehicle }` }

    return encodeURI(url);
  }

  componentDidMount() {
    this.getCitiesList();
  }

  render() {
    const { cities } = this.state;

    return (
      <div className="container px-4 py-8 my-8 sm:px-0 md:py-16 md:my-16">
        <div className="w-full max-w-5xl mx-auto pb-4 mb-4 text-center text-white">
          <h1 className="block py-2 my-2 text-3xl font-black uppercase">O jeito mais fácil de conseguir sua carga</h1>
          <h2 className="block font-semibold text-lg py-2 my-2">Encontre cargas de acordo com o seu caminhão, origem ou destino</h2>
        </div>
        <form className="w-full max-w-5xl mx-auto">
          <div className="flex md:flex-nowrap flex-wrap gap-y-1 md:gap-y-4 md:gap-x-2 w-full mx-auto mb-4 px-3">
            <Autocomplete
              id="origin"
              name="origin"
              required
              autoComplete
              className="appearance-none w-full block mb-3 leading-tight"
              filterOptions={ filterOptions }
              options={ cities }
              onChange={(event, value) => this.setState({ origin: value })}
              renderInput={(params) =>
                <TextField {...params}
                  className="bg-white rounded-md py-0"
                  placeholder="Origem"
                  size="small"
                />}
              />
            <Autocomplete
              id="destination"
              name="destination"
              autoComplete
              className="appearance-none w-full block text-black leading-tight"
              filterOptions={ filterOptions }
              options={ cities }
              onChange={(event, value) => this.setState({ destination: value })}
              renderInput={(params) =>
                <TextField {...params}
                  className="bg-white rounded-md py-0"
                  placeholder="Destino"
                  size="small"
                />}
              />
          </div>
          <div className="flex flex-wrap w-full mb-2 px-3">
            <div className="relative w-full">
              <Autocomplete
                id="vehicle"
                name="vehicle"
                required
                className="appearance-none w-full block text-black leading-tight"
                filterOptions={ filterOptions }
                options={ vehicleOptions }
                onChange={(event, value) => this.setState({ vehicle: value })}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Escolha a categoria do seu caminhão"
                    size="small"
                  />}
                />
            </div>
          </div>
          <div className="px-3 my-8">
            <Link to={ this.urlWithParams() } className="min-w-max block bg-primary py-2 px-4 rounded-md hover:opacity-90 text-center text-white uppercase font-bold">
              Procurar cargas
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default TruckloadsSearch;
