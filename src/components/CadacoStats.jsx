import { PieChart } from 'react-minimal-pie-chart';
import {Component} from 'react';

const parsePlayerData = function(playerData){
    console.log(playerData);
    const weightedGroundOuts = playerData.groundOut / 3;
    const weightedFlyOuts = playerData.flyOut / 4;
    const weightedStrikeOuts = playerData.strikeout / 3;
    const weightedSingle = playerData.single / 2;

    let entries = [];

    addEntry(entries, 1, playerData.homeRun, "Home Runs");
    addEntry(entries, 10, weightedStrikeOuts, "Strike Out");
    addEntry(entries, 2, weightedGroundOuts, "Ground Ball");
    addEntry(entries, 5, playerData.triple, "Triple");
    addEntry(entries, 8, weightedFlyOuts, "Fly Ball");
    addEntry(entries, 13, weightedSingle, "Single");
    addEntry(entries, 12, weightedGroundOuts, "Ground Out");
    addEntry(entries, 10, weightedStrikeOuts, "Strike Out");
    addEntry(entries, 14, weightedFlyOuts, "Flyball");
    addEntry(entries, 11, playerData.double, "Double");
    addEntry(entries, 6, weightedGroundOuts, "Ground Ball");
    addEntry(entries, 7, weightedSingle, "Single");
    addEntry(entries, 4, weightedFlyOuts, "Fly Ball");
    addEntry(entries, 10, weightedStrikeOuts, "Strike Out");
    addEntry(entries, 9, playerData.walk, "Walk");
    addEntry(entries, 3, weightedFlyOuts, "Fly Ball");

    return entries;
}

const addEntry = function(entries, label, value, title){
    if (value > 0){
        entries.push({
            color: "#ffffff",
            label, value, title 
        });
    }
}

export default class CadacoStats extends Component {
    render() {
      return (
        <PieChart
            data={parsePlayerData(this.props.playerData)} 
            paddingAngle={.5}
            label={({ dataEntry }) => dataEntry.label}
            background="black"
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