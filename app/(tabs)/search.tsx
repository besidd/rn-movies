import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {icons} from '@/assets/constants/icons';
import MovieCard from "@/components/MovieCard";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import SearchBar from "@/components/SearchBar";

const Search = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        refetch: loadMovies,
        reset
    } = useFetch(() => fetchMovies({query: searchQuery}), false);

    useEffect(() => {
        const timeOut = setTimeout( async () => {
            if (searchQuery.trim()) {
                await loadMovies();
            } else {
                reset();
            }
        }, 500)

        return () => clearTimeout(timeOut);
    }, [searchQuery])


    return (
        <View className={"flex-1 bg-primary"}>
            <Image source={icons.bg} className={"w-full absolute flex-1 z-0"}/>

            <FlatList
                data={movies}
                renderItem={({item}) => <MovieCard {...item}/>}
                keyExtractor={item => item.id.toString()}
                className={"px-5"}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "center",
                    gap: 16,
                    marginVertical: 16
                }}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                ListHeaderComponent={
                    <>
                        <View className="justify-center w-full flex-row items-center mt-20">
                            <Image source={icons.logo} className={"w-12 h-10"}/>
                        </View>
                        <View className={"my-5"}>
                            <SearchBar
                                placeHolder={"Search movies..."}
                                value={searchQuery}
                                onChangeText={(text: string) => {
                                    setSearchQuery(text)
                                }}
                            />
                        </View>
                        {moviesLoading && (
                            <ActivityIndicator size={"large"} color={"#0000ff"}
                                               className={"my-3"}/>
                        )}
                        {moviesError && (
                            <Text className={"text-red-500 px-5 my-3"}>Error: {moviesError?.message}</Text>
                        )}
                        {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
                            <Text className={"text-xl text-white font-bold"}>Movie results
                                for {''}
                                <Text className={"text-accent"}>{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError ?
                        (
                        <View className={"mt-10 px-5"}>
                            <Text className={"text-gray-500 text-center"}>
                                {searchQuery.trim() ? "No results found" : "Search for a movie"}
                            </Text>
                        </View>
                    ) : null
                }
            />


        </View>
    );
};

export default Search;
