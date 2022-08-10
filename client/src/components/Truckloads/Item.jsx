import React, { Component } from "react";

import furgao from "../../assets/img/furgao.png"
import bau from "../../assets/img/bau.png"
import sider from "../../assets/img/sider.png"
import gradeBaixa from "../../assets/img/gradeBaixa.png"
import graneleiro from "../../assets/img/graneleiro.png"
import camaraFria from "../../assets/img/camaraFria.png"

// importar todos os ícones

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconsMap: {
        "Furgão": furgao,
        "Baú": bau,
        "Sider": sider,
        "Grade Baixa": gradeBaixa,
        "Graneleiro": graneleiro,
        "Câmara Fria": camaraFria,
        "Prancha": furgao,
      }
    };
  }

  render() {
    const { truckload, openModal } = this.props;
    const { iconsMap } = this.state;

    return (
      <button className="w-full my-2 leading-3" onClick={ () => openModal(truckload) }>
        <div className="flex flex-start sm:max-w-sm md:max-w-lg mx-4 sm:mx-auto py-4 px-4 border-2 rounded-md border-tertiary">
          <div className="bg-tertiary rounded-md px-2 py-2">
            <img src={ iconsMap[truckload.truck_body] } alt="ícone de carga" className="w-20"></img>
          </div>
          <div className="flex flex-col justify-center items-start ml-2">
            <p className="text-xs uppercase">
              {truckload.company}
            </p>
            <p className="text-xs uppercase">
              {truckload.truckload}
            </p>
            <p className="text-xs uppercase">
              {truckload.weight}
            </p>  
            <p className="text-xs uppercase">
              {truckload.origin}
            </p>
            <p className="text-xs uppercase">
              {truckload.destiny}
            </p>
          </div>
        </div>
      </button>
    );
  }
};

export default Item;
