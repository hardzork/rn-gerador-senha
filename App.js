import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Clipboard from "expo-clipboard";

let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz0123456789!@#$%&*()+";

const App = () => {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(5);

  function generatePass() {
    let pass = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }
  function copyPass() {
    Clipboard.setString(password);
    alert("Senha copiada com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#3d3d33"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        ></Slider>
      </View>
      <TouchableOpacity onPress={generatePass} style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      {password !== "" && (
        <View style={styles.area}>
          <Text onLongPress={copyPass} style={styles.password}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#FFA200",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  password: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
