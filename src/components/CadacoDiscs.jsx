import {Component} from 'react';
import CadacoDisc from './CadacoDisc';
import _ from 'lodash';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

export default class CadacoDiscs extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
          loading: true,
          playerData: null
       };
    }

    getPlayerData(){
        const {selectedSeason, selectedTeam} = this.props;
        if (!selectedSeason || !selectedTeam)
            return;
        
        this.setState({loading: true});

        const url = `https://7c1nr8gm18.execute-api.us-east-1.amazonaws.com/live/disc?teamAbbreviation=${selectedTeam}&season=${selectedSeason}`;
        const that = this;
        axios.get(url)
            .then(function (response) {
                const playerData = response.data;
                that.setState({loading: false, playerData}); 
            });
    }

    renderDiscs = (playerData) => {
        const {selectedSeason, selectedTeamName} = this.state;
        const playersWithAtBats = _.filter(playerData, (p) => p.atBats > 0 );
    
        const playerDiscs = playersWithAtBats.map((playerData) => 
            <CadacoDisc playerData={playerData} season={selectedSeason} team={selectedTeamName}/>)
        
        return playerDiscs;
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.selectedSeason !== prevProps.selectedSeason
            || this.props.selectedTeam !== prevProps.selectedTeam)
            this.getPlayerData();
    }

    render() {
      return (
        <div>
            {this.state.loading 
            ? <div>Getting Player Data...</div> 
            : (<Container><Row>
                {this.renderDiscs(this.state.playerData)}</Row></Container>)}
        </div>
      );
    }
  }