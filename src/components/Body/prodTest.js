import * as React from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    FlatList,
} from 'react-native';


// or any pure javascript modules available in npm
import { Button, List, ListItem, Icon } from 'native-base';

const keyExtractor = item => item.login.uuid;

export default class ProdTest extends React.Component {
    state = {
        loading: true,
        data: [],
        favorite: [],
    };

    componentDidMount() {
        this.getRandomUsers();
    }

    getRandomUsers = () => {
        const url = 'https://randomuser.me/api/?seed=1&page=1&results=20';
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results,
                    loading: false,
                });
            });
    };

    toggleFav = item => {
        const id = keyExtractor(item);

        this.setState(({ favorite }) => ({
            favorite: this.isFavorite(item)
                ? favorite.filter(a => a !== id)
                : [...favorite, id],
        }));
    };

    isFavorite = item => {
        const id = keyExtractor(item);
        return this.state.favorite.includes(id);
    };

    renderRow = ({ item }) => (
        <ListItem
            roundAvatar
            title={item.location.street}
            subtitle={item.location.city}
            avatar={{ uri: item.picture.thumbnail }}
            rightIcon={
                <Icon
                    name={this.isFavorite(item) ? 'favorite' : 'favorite-border'}
                    onPress={() => this.toggleFav(item)}
                />
            }
        />
    );

    printFavorites = () => {
        const favorites = this.state.favorite.map(a =>
            this.state.data.find(b => keyExtractor(b) === a)
        );

        console.log(favorites);
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Button title="Print Favorites" />

                    <List containerStyle={{ flex: 1 }}>
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderRow}
                            keyExtractor={keyExtractor}
                            extraData={this.state.favorite}
                        />
                    </List>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 8,
    },
});
