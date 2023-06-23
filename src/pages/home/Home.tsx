import React from "react";
import "./_home.scss";

const Home = () => {
  return (
    <section className="container-fluid background">
      <div className="container text-center container_modify mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="display-1 text-white">Desarrollo Sostenible</h1>
            <p className="text-white lead pe-5">
              Nuestro sentido como corporación es propulsar el desarrollo de la
              económia empresarial velando siempre por favorecer el bienestar
              social y ambiental de los territorios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
