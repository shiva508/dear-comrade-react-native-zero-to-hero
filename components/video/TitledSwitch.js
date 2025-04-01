import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const TitledSwitch = ({
  style,
  titleStyle,
  title,
  value,
  setValue,
  disabled,
}) => {
  const outputTitle = disabled ? `${title} (Disabled)` : title;
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{outputTitle}</Text>
      <Switch
        disabled={disabled}
        value={value}
        onValueChange={(value) => setValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    justifyContent: "space-between",
  },
  title: {
    marginRight: 12,
  },
  text: {
    marginVertical: 15,
    maxWidth: "80%",
    marginHorizontal: 10,
  },
});

export default TitledSwitch;
