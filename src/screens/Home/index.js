import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";

import AmazonPrimeLogo from "../../assets/amazon_prime_logo.webp";

import MovieDexter from "../../assets/movies/dexter.jpg";

import { MovieCard } from "../../components/MovieCard";
import { LangCard } from "../../components/LangCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESHORROR } from "../../utils/moviesHorror";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home = () => {
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.amazonPrimeLogoImg} source={AmazonPrimeLogo} />
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

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <TouchableOpacity style={styles.movieThumbnail}>
                    <Image source={MovieDexter} style={styles.movieImage} />
                </TouchableOpacity>

                <Text style={styles.movieText}>Continue Watching</Text>

                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCard movieURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.watchingmovies}
                    showsHorizontalScrollIndicator={false}
                    />

                <Text style={styles.movieText}>Horror Movies</Text>

                <FlatList 
                    data={MOVIESHORROR}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MovieCard movieURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.horrormovies}
                    showsHorizontalScrollIndicator={false}
                    />

                <Text style={styles.movieText}>Watch in you Language</Text>

                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <LangCard langURL={item.langURL} />}
                    horizontal
                    contentContainerStyle={styles.language}
                    showsHorizontalScrollIndicator={false}
                    />

            </ScrollView>   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C242E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
    },
    amazonPrimeLogoImg: {
        width: 250,
        height: 45,
        marginBottom: 15,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 20,
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
    movieText: {
        padding: 20,
        fontSize: 18,
        fontWeight: "700",
        color: "#fff"
    },
    scroll: {
        width: "100%"
    },
    watchingmovies: {
        flex: 1,
        justifyContent: "center",
        gap: 15,
    },
    horrormovies: {
        gap: 15,
        marginLeft: 20,
    },
    language: {
        height: 200,
        gap: 15,
        marginLeft: 20,
    },
});