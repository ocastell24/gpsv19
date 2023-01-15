import { Loader, MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Link } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function Pantalla21() {
  return (

      <div>
        <nav>
        <h3>Estamos en Pantalla21 Componente MapView</h3>
          <ol>
            <li>
             
            <Link to="/">Menu principal / </Link>
              <Link to="/Pantalla21">Flota</Link>
            </li>
          </ol>
        </nav>

        
            <MapView 
            initialViewState={{
             latitude: -12.117880,
             longitude: -77.033043,
             zoom: 16,
           }}
           />
        
      </div>
    
  );
};

export default Pantalla21;