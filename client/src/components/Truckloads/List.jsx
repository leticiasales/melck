import truckloadListBg from "../../assets/img/truckload-list-bg.png"
import paper from "../../assets/img/paper.png"
import axios from "axios";
import { Link } from 'react-router-dom';
import { Autocomplete, TextField } from "@mui/material";
import React, { Component } from "react";

class TruckloadsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truckloads: [],
      cities: [],
      categories: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem"],
    };
  }

  search() {
    axios
      .get("/api/truckloads")
      .then((res) => {
        this.setState({ truckloads: res.data });
      })
      .catch((error) => console.log(error));
  }

  getCitiesList() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome&view=nivelado")
     .then(response => {
       return response.json()
      })
      .then(data => {
        const array = data.map(item => item["municipio-nome"]);

        this.setState({
          cities: [...new Set(array)],
        });
      })
  };

  componentDidMount() {
    this.search();
    this.getCitiesList();
  }

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <img src={ truckloadListBg } className="w-2/3"></img>
        </div>
        <div className="bg-secondary py-12">
          <form className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 w-full px-4 md:px-24">
              <Autocomplete
                id="origin-b"
                className="appearance-none block text-black leading-tight"
                options={this.state.cities}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Origem"
                    size="small"
                  />}
                />
              <Autocomplete
                id="destination-b"
                className="appearance-none block text-black leading-tight"
                options={this.state.cities}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Destino"
                    size="small"
                  />}
                />
              <Autocomplete
                id="categories-b"
                className="appearance-none block text-black leading-tight"
                options={this.state.categories}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Destino"
                    size="small"
                  />}
                />
              <Link to="category" className="block bg-tertiary md:mx-1 py-2 px-4 rounded-md hover:opacity-90 text-center text-white uppercase font-bold">
                Buscar
              </Link>
            </div>
         </form>
        </div>
        <div className="bg-white">
          {this.state.truckloads.map((truckload) => {
            return (
              <div className="py-2 leading-3">
                <div className="flex flex-start mx-4 md:mx-96 py-2 px-4 border-2 rounded-md border-tertiary">
                  <div className="bg-tertiary rounded-md">
                    <img src={ paper } className="w-20"></img>
                  </div>
                  <div className="flex flex-col justify-center ml-2">
                    <span className="text-xs" truckload={truckload} key={truckload.company}>
                      {truckload.company}
                    </span>
                    <span className="text-xs" truckload={truckload} key={truckload.id}>
                      {truckload.truckload}
                    </span>
                    <span className="text-xs" truckload={truckload} key={truckload.weight}>
                      {truckload.weight}
                    </span>  
                    <span className="text-xs" truckload={truckload} key={truckload.origin}>
                      {truckload.origin}
                    </span>
                    <span className="text-xs" truckload={truckload} key={truckload.origin}>
                      {truckload.destiny}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default TruckloadsList;
