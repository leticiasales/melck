import React, { Component } from "react";
import "../Modal.css";

import furgao from "../assets/img/furgao.png"
import bau from "../assets/img/bau.png"
import sider from "../assets/img/sider.png"
import gradeBaixa from "../assets/img/gradeBaixa.png"
import graneleiro from "../assets/img/graneleiro.png"
import camaraFria from "../assets/img/camaraFria.png"

import whatsIcon from "../assets/img/whatsapp-icon.svg"
import close from "../assets/img/close.svg"

class Modal extends Component {
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
    const { iconsMap } = this.state;
    const { closeModal, truckload } = this.props;
    const showHideClassName = truckload ? "modal block" : "modal hidden";

    const phone = process.env.REACT_APP_WPP_PHONE;
    const message = encodeURI(process.env.REACT_APP_WPP_MESSAGE);

    return (
    <div className={ showHideClassName }>
      <section className="modal-main w-100 sm:w-75 min-w-full sm:min-w-max rounded-3xl px-4 py-4">
        <div className="border-2 rounded-3xl border-tertiary px-3 py-2">
          <div className="absolute right-2 top-2">
            <button onClick={ closeModal } type="button" className="relative w-7 h-7 px-2 rounded-2xl bg-tertiary top-0 right-0 hover:opacity-90">
              <img src={ close } alt="ícone de fechar modal"></img>
            </button>
          </div>
          <div className="flex mt-4">
            <div className="bg-tertiary rounded-md px-4 py-4">
              <img alt="ícone de carga" src={ iconsMap[truckload.truck_body] } className="w-36">
              </img>
            </div>
            <div className="flex flex-col px-4 py-4">
              <span className="text-lg font-semibold">
                { truckload?.company }
              </span>
              <span className="text-lg font-semibold">
                { truckload?.material }
              </span>
              <span className="text-lg font-semibold">
                { truckload?.total_weight }
              </span>
              <span className="text-lg font-semibold">
                { truckload?.origin }
              </span>
              <span className="text-lg font-semibold">
                { truckload?.destination }
              </span>
            </div>
          </div>
          <div className="mx-0 sm:mx-10 mt-6 mb-4">
            <div className="mb-4">
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Data de Embarque: 
                </span>
                <span className="font-medium">
                  { truckload?.delivery_date }
                </span>
              </div>
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Hora limite para carregamento: 
                </span>
                <span className="font-medium">
                  { truckload?.charging_time }
                </span>
              </div>
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Data de entrega: 
                </span>
                <span className="font-medium">
                  { truckload?.delivery_date }
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Tipo de veículo: 
                </span>
                <span className="font-medium">
                  { truckload?.vehicle }
                </span>
              </div>
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Tipo de carroceria: 
                </span>
                <span className="font-medium">
                  { truckload?.truck_body }
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Qual é o material: 
                </span>
                <span className="font-medium">
                  { truckload?.material }
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Quantidade: 
                </span>
                <span className="font-medium">
                  { truckload?.quantity }
                </span>
              </div>
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Peso total: 
                </span>
                <span className="font-medium">
                  { truckload?.total_weight }
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">
                <span className="font-bold mr-2">
                  Valor da mercadoria: 
                </span>
                <span className="font-medium">
                  { truckload?.price }
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href={ `https://api.whatsapp.com/send/?phone=${ phone }&text=${ message + truckload.title }&app_absent=0` } className="flex cursor-pointer bg-tertiary rounded-md px-12 sm:px-20 lg:px-20 py-2 hover:opacity-80" target="_blank" rel="noreferrer">
              <span className="text-md md:text-xl text-white font-semibold mr-4">
                Carregar este frete
              </span>
              <img alt="Ícone whatsapp" src={ whatsIcon } className="w-6"></img>
            </a>
          </div>
        </div>
      </section>
    </div>
    );
  };
};

export default Modal;
