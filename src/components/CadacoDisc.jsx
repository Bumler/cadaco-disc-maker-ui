import CadacoStats from './CadacoStats';
import {Component} from 'react';
import CadacoFacePlate from './CadacoFacePlate';

export default class CadacoDisc extends Component {
    render() {
      return (
        <div class="disc-container">
          <CadacoStats/>
          <CadacoFacePlate/>
        </div>
      );
    }
}