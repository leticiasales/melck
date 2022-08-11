import React, { Component } from "react";
import axios from "axios";

import {
  Autocomplete,
  CircularProgress,
  TextField,
  Pagination,
  PaginationItem
} from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight
} from '@mui/icons-material';

import Item from "./Item";
import Modal from "../Modal";

import "./List.css";

import truckloadListBg from "../../assets/img/truckload-list-bg.png"

class TruckloadsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      loading: true,
      modalTruckload: false,
      page: null,
      totalPages: null,
      truckloads: [],
    };
  }

  updateParams = (e, value) => {
    e.preventDefault();

    const page = value || this.state.page;

    this.setState({
      loading: true,
      page,
    }, () => { this.search() })
  }

  search() {
    console.log("state:", this.state);
    let { origin, destination, vehicle, page } = this.state;

    const params = {
      origin,
      destination,
      vehicle,
      page
    };

    axios
      .get("/api/truckloads", { params })
      .then((res) => {
        this.setState({
          truckloads: res.data.truckloads,
          loading: false,
          page: res.data.page,
          totalPages: res.data.totalPages
        });
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
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    this.setState({
      origin: params.get("origin"),
      destination: params.get("destination"),
      vehicle: params.get("vehicle"),
    }, () => { this.search() });

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
    const vehicleOptions = ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem"];
    const { cities, loading, modalTruckload, page, totalPages, truckloads} = this.state;

    return (
      <>
        <div id="banner" className="pt-3 flex justify-center">
          <img src={ truckloadListBg } alt="Banner" className="-mt-20 px-4 max-w-5xl"></img>
        </div>
        <div className="bg-secondary py-12">
          <form className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 w-full px-4 md:px-24">
              <Autocomplete
                id="origin"
                name="origin"
                required
                className="appearance-none block text-black leading-tight"
                options={ cities }
                value={ this.state.origin || null }
                onChange={(event, value) => 
                  this.setState({ origin: value })
                }
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
                className="appearance-none block text-black leading-tight"
                options={ cities }
                value={ this.state.destination || null }
                onChange={(event, value) => this.setState({ destination: value })}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Destino"
                    size="small"
                  />}
                />
              <Autocomplete
                id="vehicle"
                name="vehicle"
                required
                className="appearance-none block text-black leading-tight"
                options={ vehicleOptions }
                value={ this.state.vehicle || null }
                onChange={(event, value) => this.setState({ vehicle: value })}
                renderInput={(params) =>
                  <TextField {...params}
                    className="bg-white rounded-md py-0"
                    placeholder="Caminhão"
                    size="small"
                  />}
                />
              <button onClick={ this.updateParams } className="block bg-tertiary md:mx-1 py-2 px-4 rounded-md hover:opacity-90 text-center text-white uppercase font-bold">
                Buscar
              </button>
            </div>
         </form>
        </div>
        <div className="bg-white pt-2 grow flex flex-col justify-center items-center">
          { loading ?
            <CircularProgress /> :
            <>
              <ul className="w-full bg-white list-style-none">
                {
                  truckloads.map((truckload) => {
                    return <li className="text-center" key={ truckload.id }>
                      <Item truckload={ truckload } openModal={ this.openModal } />
                    </li>
                  })
                }
              </ul>          
              <div className="flex justify-center pt-2 pb-4">
                <Pagination
                  count={ totalPages }
                  page={ page }
                  siblingCount={1}
                  boundaryCount={0}
                  shape="rounded"
                  onChange={ this.updateParams }
                  renderItem={(item) =>
                    <PaginationItem
                      components={{
                        previous: KeyboardDoubleArrowLeft,
                        next: KeyboardDoubleArrowRight
                      }}
                      {...item}
                    />
                  }
                />
              </div>
            </>
          }
          <Modal truckload={ modalTruckload } closeModal={ this.closeModal } />
        </div>
      </>
    );
  }
};

export default TruckloadsList;
