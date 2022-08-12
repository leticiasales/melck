import React, { Component } from "react";
import NumberFormat from "react-number-format";

import furgao from "../../assets/img/furgao.png"
import bau from "../../assets/img/bau.png"
import sider from "../../assets/img/sider.png"
import gradeBaixa from "../../assets/img/gradeBaixa.png"
import graneleiro from "../../assets/img/graneleiro.png"
import camaraFria from "../../assets/img/camaraFria.png"

const iconsMap = {
  "Furgão": furgao,
  "Baú": bau,
  "Sider": sider,
  "Grade Baixa": gradeBaixa,
  "Graneleiro": graneleiro,
  "Câmara Fria": camaraFria,
  "Prancha": furgao,
}

class Item extends Component {
  render() {
    const { truckload, openModal } = this.props;

    return (
      <button className="flex flex-start sm:max-w-sm md:max-w-lg mx-4 sm:mx-auto my-2 py-4 px-4 border-2 rounded-md border-tertiary hover:bg-gray-100" onClick={ () => openModal(truckload) }>
        <div className="bg-tertiary rounded-md px-2 py-2 w-1/5 flex justify-center items-center">
          <img src={ iconsMap[truckload.truck_body] } alt={ truckload.truck_body }></img>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-start ml-2 text-xs uppercase font-medium text-left">
          <p>
            { truckload.company }
          </p>
          <p>
            { truckload.title }
          </p>
          <p className="lowercase">
            <NumberFormat value={ truckload?.total_weight } displayType="text" thousandSeparator="." decimalSeparator="," suffix=" kg" isNumericString={ true } decimalScale={ 3 } />
          </p>
          <p>
            { truckload.origin }
          </p>
          <p>
            { truckload.destination }
          </p>
        </div>
      </button>
    );
  }
};

export default Item;
