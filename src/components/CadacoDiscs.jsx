import {Component} from 'react';
import CadacoDisc from './CadacoDisc';
import _ from 'lodash';
import axios from 'axios';
import {teamOptions} from '../const/TeamOptions';
import {seasons} from '../const/Seasons';
import Select from 'react-select';

export default class CadacoDiscs extends Component {
    constructor(props) {
      super(props);
      this.state = {
          loading: true,
          selectedTeam: null,
          selectedTeamName: null,
          selectedSeason: null
       };
    }

    handleTeamChange = (selectedTeam) => {
        this.setState({selectedTeam: selectedTeam.value, selectedTeamName: selectedTeam.label});
    }

    handleSeasonChange = (selectedSeason) => {
        this.setState({selectedSeason: selectedSeason.value});
    }

    getPlayerData(){
        console.log("Getting player data");
        console.log(this.state);
        const {selectedSeason, selectedTeam} = this.state;
        if (!selectedSeason || !selectedTeam)
            return;
        
        this.setState({loading: true});

        console.log("Trying a request");
        const url = `http://localhost:3001/disc?teamAbbreviation=${selectedTeam}&season=${selectedSeason}`;
        const that = this;
        axios.get(url)
            .then(function (response) {
                const playerData = response.data;
                that.setState({loading: false, playerData});
                that.setState({loading: false}); 
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
        if (this.state.selectedSeason !== prevState.selectedSeason
            || this.state.selectedTeam !== prevState.selectedTeam)
            this.getPlayerData();
    }

    render() {
      return (
          <div>
            <div class= "selector">
                <Select
                    onChange={this.handleTeamChange}
                    options={teamOptions}
                    placeholder="Select your team"
                    isSearchable
                />

                <Select
                    onChange={this.handleSeasonChange}
                    options={seasons}
                    placeholder="Select your season"
                    isSearchable
                />
            </div>

            {this.state.loading 
            ? <div>Getting Player Data...</div> 
            : (<ul>{this.renderDiscs(this.state.playerData)}</ul>)}
          </div>
      );
    }
  }