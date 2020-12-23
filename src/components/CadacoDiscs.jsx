import {Component} from 'react';
import CadacoDisc from './CadacoDisc';
import _ from 'lodash';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

export default class CadacoDiscs extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isFetching: false,
          playerData: null
       };
    }

    getPlayerData(){
        const {selectedSeason, selectedTeam} = this.props;
        if (!selectedSeason || !selectedTeam)
            return;
        
        this.setState({isFetching: true});

        const url = `https://7c1nr8gm18.execute-api.us-east-1.amazonaws.com/live/disc?teamAbbreviation=${selectedTeam}&season=${selectedSeason}`;
        const that = this;
        axios.get(url)
            .then(function (response) {
                const playerData = response.data;
                that.setState({isFetching: false, playerData}); 
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

    renderByState(){
        if (this.state.isFetching)
            return <div>Getting Player Data...</div>;
        if (this.state.playerData)
            return (
                <Container>
                    <Row>{this.renderDiscs(this.state.playerData)}</Row>
                </Container>);
        
        return <div>Select a team and season.</div>
    }

    render() {
      return (
        <div>
            {this.renderByState()}
        </div>
      );
    }
  }