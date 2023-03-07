import React from "react";
import Header from "./componentes/Header";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";

const App = () => {
  return (

    <div className="container">
      <Header title="Galaria de imagenes con React" />
      <div className="row">
        <div className="col-md-3">
          <Card
            imageUrl="https://images.pexels.com/photos/2437293/pexels-photo-2437293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Image 1"
            description="Un calmado y hermoso río  a través de un paisaje natural, rodeado de exuberante vegetación y montañas en la distancia."
          />
        </div>
        <div className="col-md-3">
          <Card
            imageUrl="https://images.pexels.com/photos/9956966/pexels-photo-9956966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Image 2"
            description="Un paisaje solitario se extiende frente a nuestros ojos, donde el color marrón oscuro es el rey indiscutible de este lugar. "
          />
        </div>
        <div className="col-md-3">
          <Card
            imageUrl="https://images.pexels.com/photos/9246892/pexels-photo-9246892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Image 3"
            description="Un faro se alza en una costa rodeada de naturaleza, este, es el único indicio de la presencia humana en este paisaje majestuoso."
          />

        </div>
      </div>
      <Footer />
    </div>

  );
};

export default App;