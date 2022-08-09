import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import Item from "./Item";
import Modal from "../Modal";
import "./list.css";
import left from "../../assets/img/left.svg"
import right from "../../assets/img/right.svg"

import truckloadListBg from "../../assets/img/truckload-list-bg.png"

class TruckloadsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem"],
      cities: [],
      modalTruckload: false,
      truckloads: [],
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
    this.search();
    this.getCitiesList();
  }

  openModal = (truckload) => {
    this.setState({
      modalTruckload: truckload
    });
  }

  closeModal = () => {
    this.setState({
      modalTruckload: false
    });
  }

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <img src={ truckloadListBg } alt="avatar cargas" className="w-5/6"></img>
        </div>
        <div className="bg-secondary py-12">
          <form className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 w-full px-4 md:px-24">
              <Autocomplete
                id="origin-b"
                name="origin-b"
                required
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
                name="destination-b"
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
                name="categories-b"
                required
                className="appearance-none block text-black leading-tight"
                options={this.state.categories}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Caminhão"
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
          {
            this.state.truckloads.map((truckload) => {
              return <Item onClick={ this.openModal(truckload) }truckload={ truckload } key={ truckload.id } />
            })
          }
        </div>
        <div className="bg-white flex justify-center pt-2 pb-4">
          <button>
            <img src={ left } alt="página anterior" className="w-5"></img>
          </button>
          <span className="text-xl text-gray-500 px-1"> 
            x
          </span>
          <button>
            <img src={ right } alt="próxima página" className="w-5"></img>
          </button>
        </div>
        <Modal truckload={ this.state.modalTruckload } closeModal={ this.closeModal } />
      </div>
    );
  }
};

export default TruckloadsList;
