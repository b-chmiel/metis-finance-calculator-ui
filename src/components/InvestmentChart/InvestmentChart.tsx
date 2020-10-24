import React, {useEffect} from 'react';
import {CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {DataGraph} from './InvestmentChart.types';
import {Paper} from '@material-ui/core';
import * as styles from './InvsetmentChart.styles';

interface Props {
    graph: DataGraph;
}

export const InvestmentChart: React.FC<Props> = ({graph}) => {
    useEffect(() => {
        console.log(graph);
    });

    return (
        <Paper className={styles.paper}>
            <ResponsiveContainer width={'100%'} height={200}>
                <LineChart data={graph.graphPointsValue}>
                    <XAxis dataKey="x">
                        <Label value={graph.xaxisDataType} offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label value={graph.yaxisDataType} angle={-90} offset={5} position="insideLeft" />
                    </YAxis>

                    <Tooltip />

                    <CartesianGrid stroke="#f5f5f5" />

                    <Line type="monotone" dataKey="y" stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};