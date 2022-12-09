import { StatusBar } from "expo-status-bar";
import {Button,StyleSheet,Text,View,ActivityIndicator,} from "react-native";
const axios = require("axios").default;
import * as React from "react";

function TPScreen() {
  const [frase, setFrases] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function pegarAPI() {
    setLoading(true);
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(function (resp) {
        let frase = resp.data.value;
        setFrases(frase);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Obtener frase sobre Chuck Norris"
          onPress={() => pegarAPI()}
        />
      )}
      {frase != null ? <Text style={styles.texto}>{frase}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    marginVertical: 40,
    marginHorizontal: 20,
  }
});


module.exports = TPScreen;
