import { PieChart } from 'react-minimal-pie-chart';
import {Component} from 'react';

//const mockData = {"homeRun":53,"groundOut":130,"flyOut":132,"triple":2,"single":155,"double":30,"atBats":597,"walk":72,"strikeout":183,"average":".260","teamId":"121","primaryPosition":"1B","name":"Pete Alonso","playerId":"624413"};

const parsePlayerData = function(playerData){
    console.log(playerData);
    const weightedGroundOuts = playerData.groundOut / 3;
    const weightedFlyOuts = playerData.flyOut / 4;
    const weightedStrikeOuts = playerData.strikeout / 3;
    const weightedSingle = playerData.single / 2;

    return [
        chartEntry(1, playerData.homeRun, "Home Runs"),
        chartEntry(10, weightedStrikeOuts, "Strike Out"),
        chartEntry(2, weightedGroundOuts, "Ground Ball"),
        chartEntry(5, playerData.triple, "Triple"),
        chartEntry(8, weightedFlyOuts, "Fly Ball"),
        chartEntry(13, weightedSingle, "Single"),
        chartEntry(12, weightedGroundOuts, "Ground Out"),
        chartEntry(10, weightedStrikeOuts, "Strike Out"),
        chartEntry(14, weightedFlyOuts, "Flyball"),
        chartEntry(11, playerData.double, "Double"),
        chartEntry(6, weightedGroundOuts, "Ground Ball"),
        chartEntry(7, weightedSingle, "Single"),
        chartEntry(4, weightedFlyOuts, "Fly Ball"),
        chartEntry(10, weightedStrikeOuts, "Strike Out"),
        chartEntry(9, playerData.walk, "Walk"),
        chartEntry(3, weightedFlyOuts, "Fly Ball"),
    ];
}

const chartEntry = function(label, value, title){
    return {
        color: "#ffffff",
        label, value, title 
    }
}

export default class CadacoStats extends Component {
    render() {
      return (
        <PieChart
            data={parsePlayerData(this.props.playerData)} 
            lineWidth={25} 
            paddingAngle={.5}
            label={({ dataEntry }) => dataEntry.label}
            labelStyle={(index) => ({
                fill: "black",
                fontSize: '6px',
                fontFamily: 'sans-serif',
                })}
                radius={50}
                labelPosition={87}
                startAngle={270}
        />
      );
    }
}