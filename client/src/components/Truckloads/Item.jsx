import React, { Component } from "react";

import paper from "../../assets/img/paper.png"

class Item extends Component {
  render() {
    const { truckload } = this.props;
    return (
      <div className="py-2 leading-3">
        <div className="flex flex-start sm:max-w-sm md:max-w-lg mx-4 sm:mx-auto py-4 px-4 border-2 rounded-md border-tertiary">
          <div className="bg-tertiary rounded-md px-2 py-2">
            <img src={ paper } alt="ícone de carga" className="w-20"></img>
          </div>
          <div className="flex flex-col justify-center ml-2">
            <span className="text-xs">
              {truckload.company}
            </span>
            <span className="text-xs">
              {truckload.truckload}
            </span>
            <span className="text-xs">
              {truckload.weight}
            </span>  
            <span className="text-xs">
              {truckload.origin}
            </span>
            <span className="text-xs">
              {truckload.destiny}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Item;
