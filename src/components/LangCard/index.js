import { StyleSheet, TouchableOpacity, Image } from "react-native";


export const LangCard = (props) => {
    return (
        <TouchableOpacity>
            <Image source={props.langURL} style={styles.langImg} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    langImg: {
        borderRadius: 10,
    },
});