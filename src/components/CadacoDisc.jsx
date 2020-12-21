import CadacoStats from './CadacoStats';
import {Component} from 'react';
import CadacoFacePlate from './CadacoFacePlate';

export default class CadacoDisc extends Component {
    render() {
      console.log("Player data retrieved");
      console.log(this.props.playerData);
      return (
        <div class="disc-container">
          <CadacoStats playerData={this.props.playerData}/>
          <CadacoFacePlate playerData={this.props.playerData}/>
        </div>
      );
    }
}