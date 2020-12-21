import {Component} from 'react';

//const playerData = {"homeRun":53,"groundOut":130,"flyOut":132,"triple":2,"single":155,"double":30,"atBats":597,"walk":72,"strikeout":183,"average":".260","teamId":"121","primaryPosition":"1B","name":"Alonso, Pete","playerId":"624413","firstName":"Pete","lastName":"Alonso"};

export default class CadacoFacePlate extends Component {
    render() {
      const {playerData} = this.props;

      return (
        <div class="disc-plate">
          <div>
            <div class="first-name">{playerData.firstName}</div>
            <div class="last-name">{playerData.lastName}</div>
            <div class="team-name">Mets 2020</div>
            <div class="hitter-meta">AB: {playerData.atBats} HR: {playerData.homeRun} AVE: {playerData.average}</div>
            <div class="position-name">{playerData.primaryPosition}</div>
          </div>
        </div>
      );
    }
}