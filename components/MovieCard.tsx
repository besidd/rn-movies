import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Link} from "expo-router";
import {icons} from "@/assets/constants/icons";

const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
    const screenWidth = Dimensions.get('window').width;
    return (
        <View>
            <Link href={`/movies/${id}`} asChild>
                <TouchableOpacity style={{width: screenWidth / 3 - 20}}>
                    <Image
                        className={"w-full h-52 rounded-lg"}
                        resizeMode={"cover"}
                        source={{
                            uri: poster_path ?
                                `https://image.tmdb.org/t/p/w500/${poster_path}`
                                :
                                `https://via.placeholder.com/600X400/1a1a1a/ffffff.png`
                        }}
                    />
                    <Text className={"text-sm text-white mt-2 font-bold"} numberOfLines={1}>{title}</Text>

                    <View className={"flex-row items-center justify-start gap-x-1"}>
                        <Image
                            source={icons.star}
                            className={"size-4"}
                        />
                        <Text className={"text-white text-xs font-bold uppercase"}>{Math.round(vote_average) / 2}</Text>
                    </View>

                    <View className={"flex-row items-center justify-between"}>
                        <Text className={"text-xs text-light-300 font-medium mt-1"}>{release_date?.split("-")[0]}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default MovieCard;