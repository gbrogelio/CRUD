import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBarComponent = ({ title }) => (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
    </Appbar.Header>
);

export default AppBarComponent;