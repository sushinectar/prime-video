import { StyleSheet, TouchableOpacity, Image } from "react-native";


export const MovieCard = (props) => {
    return (
        <TouchableOpacity>
            <Image source={props.movieURL} style={styles.img} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 177,
        height: 120,
        borderRadius: 10,
    },
});