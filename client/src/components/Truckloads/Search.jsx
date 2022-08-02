import axios from "axios";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

class TruckloadsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
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

  componentDidMount() {
    this.getCitiesList();
  }

  render() {
    return (
      <div className="container">
        <div className="w-full max-w-5xl mx-auto pt-8 mt-8 pb-4 mb-4 text-center text-white">
          <h1 className="block py-2 my-2 text-3xl font-black uppercase">O jeito mais fácil de conseguir sua carga</h1>
          <h2 className="block font-semibold text-lg py-2 my-2">Encontre cargas de acordo com o seu caminhão, origem ou destino</h2>
        </div>
        <form className="w-full max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-y-4 w-3/4 md:w-full mx-auto mb-2 px-3">
            <Autocomplete
              id="origin"
              autoComplete
              className="appearance-none block w-full md:w-1/2 mb-3 leading-tight"
              options={this.state.cities}
              sx={{ padding: 0 }}
              renderInput={(params) =>
                <TextField {...params}
                  className="bg-white rounded-md py-0"
                  placeholder="Origem"
                  size="small"
                />}
              />
            <div className="w-full md:w-1/2 px-3">
              <input className="appearance-none block w-full bg-white text-black border border-white rounded-md py-2 px-4 leading-tight placeholder-black focus:outline-none focus:bg-white focus:border-primary" id="grid-last-name" type="text" placeholder="Destino"></input>
            </div>
          </div>
          <div className="flex flex-wrap w-full mb-2 px-3">
            <div className="relative w-full">
              <select required className="appearance-none block px-3 w-full bg-white mb-0 text-black border border-white rounded-md py-2 px-4 mb-3 leading-tight font-medium focus:outline-none focus:bg-white focus:border-primary" id="grid-state" defaultValue="" >
                <option value="">Escolha a categoria do seu caminhão</option>
                <option value="Van">Van</option>
                <option value="Toco">Toco</option>
                <option value="Truck">Truck</option>
                <option value="Bitruck">Bitruck</option>
                <option value="Carreta">Carreta</option>
                <option value="Carreta Ls">Carreta Ls</option>
                <option value="Vanderleia">Vanderleia</option>
                <option value="Bitrem">Bitrem</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="px-3 my-8">
            <Link to="category" className="min-w-max block bg-primary py-2 px-4 rounded-md hover:opacity-90 text-center text-white uppercase font-bold">
              Procurar cargas
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default TruckloadsSearch;
