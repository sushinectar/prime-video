import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

import MovieTheShi from "../../assets/movies/the_shining.jpg";

export const Home = () => {
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.movieThumbnail}>
                <Image source={MovieTheShi} style={styles.movieImage} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
    },
    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#bbb",
    },
    movieThumbnail: {
        width: "100%",
        alignItems: "center",
    },
    movieImage: {
        width: "100%",
        height: 200,
    },
});