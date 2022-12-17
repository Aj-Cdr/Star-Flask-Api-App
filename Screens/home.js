
import React from "react";
import { Text, StyleSheet, View, FlatList, Alert, SafeAreaView, Axios, ListItem } from "react-native"

export default class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list_data: [],
            url: "http://127.0.0.1/5000"
        }
    }

    componentDidMount() {
        this.getStars()
    }

    getStars = () => {
        const { url } = this.state
        Axios.get(url)
            .then(response => {
                this.setState({ list_data: response.data.data })
            })
            .catch(error => { Alert.error(error.message) })
    }

    renderItem = ({ item, index }) => {
        <ListItem
            key={index}
            title={`Star : ${item.name}`}
            subtitle={`Distance from earth : ${item.distance_from_earth}`}
            titleStyle={styles.title}
            containerStyle={styles.listContainer}
            bottomDivider
            chevron
            onPress={() =>
                this.props.navigation.navigate("Details", { planet_name: item.name })
            }
        />
    }

    keyExtractor = (item, index) => index.toString()

    render() {
        const { listData } = this.state;

        if (listData.length === 0) {
            return (
                <View style={styles.emptyContainer}>
                    <Text>Loading</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <View style={styles.upperContainer}>
                    <Text style={styles.headerText}>Stars Info-Grabber</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <FlatList
                        data={this.state.list_data}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edc988"
    },
    upperContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#132743"
    },
    lowerContainer: {
        flex: 0.9
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyContainerText: {
        fontSize: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#d7385e"
    },
    listContainer: {
        backgroundColor: "#eeecda"
    }
});