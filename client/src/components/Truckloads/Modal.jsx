import React, { Component } from "react";
import NumberFormat from "react-number-format";
import { Close, WhatsApp } from "@mui/icons-material";

import furgao from "../../assets/img/furgao.png"
import bau from "../../assets/img/bau.png"
import sider from "../../assets/img/sider.png"
import gradeBaixa from "../../assets/img/gradeBaixa.png"
import graneleiro from "../../assets/img/graneleiro.png"
import camaraFria from "../../assets/img/camaraFria.png"
import prancha from "../../assets/img/prancha.png"

const iconsMap = {
  "Furgão": furgao,
  "Baú": bau,
  "Sider": sider,
  "Grade Baixa": gradeBaixa,
  "Graneleiro": graneleiro,
  "Câmara Fria": camaraFria,
  "Prancha": prancha,
}

class Modal extends Component {
  render() {
    const { closeModal, truckload } = this.props;
    const showHideClassName = truckload ? "fixed" : "hidden";
    const chargingDate = truckload && new Date(truckload.charging_date).toLocaleDateString('pt-BR');
    const chargingTime = truckload && new Date(truckload.charging_time).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' });
    const deliveryDate = truckload && new Date(truckload.delivery_date).toLocaleDateString('pt-BR');

    const phone = process.env.REACT_APP_WPP_PHONE;
    const message = encodeURI(process.env.REACT_APP_WPP_MESSAGE);

    return (
    <div className={ showHideClassName + " bg-black-transparent top-0 left-0 w-screen h-screen" }>
      <section className="fixed w-4/5 md:w-1/2 max-w-md h-auto top-1/2 left-1/2 bg-white sm:w-75 sm:min-w-max rounded-3xl px-4 py-4 -translate-x-2/4 -translate-y-1/2">
        <div className="flex flex-col border-2 rounded-3xl border-tertiary px-4 py-2">
          <div className="absolute right-2 top-2">
            <button onClick={ closeModal } type="button" className="relative flex justify-center items-center text-white p-1 rounded-2xl bg-tertiary top-0 right-0 hover:opacity-90">
              <Close />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row mt-4">
            <div className="flex justify-center bg-tertiary rounded-md px-2 py-2 sm:py-2">
              <img alt={ truckload.truck_body } src={ iconsMap[truckload.truck_body] } className="w-28" />
            </div>
            <div className="flex flex-col sm:justify-center px-1 sm:px-4 py-4">
              <span className="text-lg font-semibold uppercase">
                { truckload?.title }
              </span>
              <span className="text-lg font-semibold uppercase">
                { truckload?.origin }
              </span>
              <span className="text-lg font-semibold uppercase">
                { truckload?.destination }
              </span>
            </div>
          </div>
          <div className="mx-0 sm:mx-10 mt-6 mb-4">
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Data de embarque: 
                </span>
                <span className="font-medium">
                  { chargingDate }
                </span>
              </div>
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Hora limite para carregamento: 
                </span>
                <span className="font-medium">
                  { chargingTime }
                </span>
              </div>
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Data de entrega: 
                </span>
                <span className="font-medium">
                  { deliveryDate }
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Tipo de veículo: 
                </span>
                <span className="font-medium">
                  { truckload?.vehicle }
                </span>
              </div>
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Tipo de carroceria: 
                </span>
                <span className="font-medium">
                  { truckload?.truck_body }
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Qual é o material: 
                </span>
                <span className="font-medium">
                  { truckload?.material }
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Quantidade: 
                </span>
                <span className="font-medium">
                  <NumberFormat value={ truckload?.quantity } displayType="text" suffix=" unidades" isNumericString={ true } />
                </span>
              </div>
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Peso total: 
                </span>
                <span className="font-medium">
                  <NumberFormat value={ truckload?.total_weight } displayType="text" thousandSeparator="." decimalSeparator="," suffix=" kg" isNumericString={ true } decimalScale={ 3 } />
                </span>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase">
                <span className="font-bold mr-2">
                  Valor da mercadoria: 
                </span>
                <span className="font-medium">
                  <NumberFormat value={ truckload?.price } displayType="text" thousandSeparator="." decimalSeparator="," prefix="R$" isNumericString={ true } decimalScale={ 2 } />
                </span>
              </div>
            </div>
          </div>
          <a
            href={ `https://api.whatsapp.com/send/?phone=${ phone }&text=${ message + truckload.title }&app_absent=0` }
            className="flex justify-center items-center text-white font-semibold sm:w-2/3 px-4 py-2 sm:px-2 mx-auto cursor-pointer bg-tertiary rounded-md hover:opacity-80"
            target="_blank" rel="noreferrer"
          >
            <span className="text-md mr-4">
              Carregar este frete
            </span>
            <WhatsApp color="white" />
          </a>
        </div>
      </section>
    </div>
    );
  };
};

export default Modal;
