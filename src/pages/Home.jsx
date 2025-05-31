import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import Card from '../components/Card';
// Importa otros componentes o secciones aquí

const Home = () => {
  const productosDestacados = [
    {
      imageUrl: 'https://via.placeholder.com/800x400?text=Producto+1',
      title: 'Lana de Alpaca',
      description: 'Lana 100% natural de alpaca'
    },
    {
      imageUrl: 'https://via.placeholder.com/800x400?text=Producto+2',
      title: 'Kit de Inicio',
      description: 'Kit completo para principiantes'
    },
    {
      imageUrl: 'https://via.placeholder.com/800x400?text=Producto+3',
      title: 'Agujas Premium',
      description: 'Set de agujas de alta calidad'
    }
  ];

  return (
    <div className="container">
      <h2>Bienvenidos a Tejelanas Vivi</h2>
      <ProductCarousel products={productosDestacados} />
      <div className="row mt-4">
        <div className="col-md-4">
          <Card 
            title="Producto Destacado" 
            description="Descripción breve del producto destacado." 
          />
        </div>
      </div>
    </div>
  );
};

export default Home; 