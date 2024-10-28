import { StyleSheet } from "react-native";

export const colors = {
    primary: '#ff8a16',
    secondary: '#d1005e',
    tertiary: '#0c80a3',
    success: '#45ff3f',
    warning: '#ffcd45',
    danger: '#e71d36',
    dark: '#22223b',

    background: '#131313',
};

export const globals = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    primaryButton: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: "100%",
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600"
    },
    buttonsContainer: {
        width: "100%",
        gap: 10,
    },
    navBar: {
        width: "100%",
        backgroundColor: "#252525",
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
    navButton: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: "20%",
        alignItems: 'center',
        bottom: -10
    },
})