import React from "react";
import { Linking, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WEB_URL = "https://kntech.site";

export default function App() {
  const openWebApp = () => {
    Linking.openURL(WEB_URL);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>GT</Text>
        </View>
        <Text style={styles.title}>GiaSuTop</Text>
        <Text style={styles.description}>
          Ứng dụng học trực tuyến đang chạy bằng bản web app. Mở GiaSuTop rồi chọn thêm vào màn hình chính để dùng như app.
        </Text>
        <TouchableOpacity style={styles.button} onPress={openWebApp}>
          <Text style={styles.buttonText}>Mở GiaSuTop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13519c",
    marginBottom: 18,
  },
  logoText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#475569",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    height: 48,
    minWidth: 180,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5a1f",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
  },
});
