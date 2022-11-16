import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function DetailsScreen(){
    return(
      <View style={styles.container}>
        <Text>Detalles</Text>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

module.exports = DetailsScreen;