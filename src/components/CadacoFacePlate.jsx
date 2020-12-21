import {Component} from 'react';

export default class CadacoFacePlate extends Component {
    render() {
      const {playerData, team, season} = this.props;

      return (
        <div class="disc-plate">
          <div>
            <div class="first-name">{playerData.firstName}</div>
            <div class="last-name">{playerData.lastName}</div>
            <div class="team-name">{team} {season}</div>
            <div class="hitter-meta">AB: {playerData.atBats} HR: {playerData.homeRun} AVE: {playerData.average}</div>
            <div class="position-name">{playerData.primaryPosition}</div>
          </div>
        </div>
      );
    }
}