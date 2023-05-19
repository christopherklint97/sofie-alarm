import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sofie Alarms</Text>
      <Button onPress={() => setModalVisible(true)} title="Add alarm" />
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.header}>Modal is open</Text>
          </View>
          <View style={styles.modalFooter}>
            <Button onPress={() => setModalVisible(false)} title="Close" />
          </View>
        </SafeAreaView>
      </Modal>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    backgroundColor: "#eb07aa",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
  },
  modalFooter: {
    paddingBottom: 10,
  },
});
