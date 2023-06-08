import {
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
  useTheme,
} from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import Main from "./source/main";
import styles from "./AppStyles";
import { useState } from "react";

export default function App() {
  const [nightMode, setNightmode] = useState(false);
  return (
    <Provider theme={nightMode ? DarkTheme : DefaultTheme}>
      <ThemeProvider theme={nightMode ? DarkTheme : DefaultTheme}>
        <StatusBar
          backgroundColor={
            nightMode ? useTheme().colors.surface : useTheme().colors.primary
          }
          barStyle={"light-content"}
        />
        <Appbar.Header>
          <Appbar.Content title="Currency Converter" />
          <Appbar.Action
            icon={nightMode ? "brightness-7" : "brightness-3"}
            onPress={() => setNightmode(!nightMode)}
          />
        </Appbar.Header>
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <Main />
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </Provider>
  );
}
