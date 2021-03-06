import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ReactNode, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Summary } from "../Summary";
import { styles } from "./styles";

interface Props {
  children: ReactNode;
  showHeader: boolean;
}

export function Layout({ children, showHeader }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        { showHeader && <Header /> }

        {children}
      </ScrollView>

      <Summary />
      <Navbar />
    </View>
  );
}