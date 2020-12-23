import {Component} from 'react';
import {teamOptions} from '../const/TeamOptions';
import {seasons} from '../const/Seasons';
import Select from 'react-select';
import CadacoDiscs from './CadacoDiscs'
import ReactToPrint from 'react-to-print';

export default class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          selectedTeam: null,
          selectedTeamName: null,
          selectedSeason: null,
          playerData: null
       };
    }

    handleTeamChange = (selectedTeam) => {
        console.log("hello");
        this.setState({selectedTeam: selectedTeam.value, selectedTeamName: selectedTeam.label});
    }

    handleSeasonChange = (selectedSeason) => {
        this.setState({selectedSeason: selectedSeason.value});
    }

    renderPrintMessage(){
        //if (this.state.playerData){
            return (<ReactToPrint 
                trigger={() => <a href="#">Print this out!</a>}
                content={() => this.componentRef}
            />);
        //}
        
    }

    render() {
        return (
            <div class="app-container">
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

                {this.renderPrintMessage()}

                <CadacoDiscs selectedTeamName={this.state.selectedTeamName}
                    selectedTeam={this.state.selectedTeam}
                    selectedSeason={this.state.selectedSeason}
                    ref={(el) => (this.componentRef = el)}
                />
            </div>
        );
      }
}