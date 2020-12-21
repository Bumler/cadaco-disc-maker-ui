import CadacoStats from './CadacoStats';
import {Component} from 'react';
import CadacoFacePlate from './CadacoFacePlate';

export default class CadacoDisc extends Component {
    render() {
      console.log("Player data retrieved");
      console.log(this.props);
      return (
        <div class="disc-container">
          <CadacoStats playerData={this.props.playerData}/>
          <CadacoFacePlate playerData={this.props.playerData} team={this.props.team} season={this.props.season}/>
        </div>
      );
    }
}