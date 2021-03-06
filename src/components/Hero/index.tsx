import { Image, Text, TouchableOpacity, View } from "react-native";
import { DetailsType } from "../../types";
import { styles } from "./styles";
import { Genres } from "../Genres";
import { Average } from "../Average";
import { MediaIcon } from "../MediaIcon";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";

import DefaultImage from "../../assets/backdrop-default.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

interface Props {
  data: DetailsType;
}

export function Hero({ data }: Props) {
  const navigation = useNavigation();

  function navigateToDetails() {
    navigation.navigate("Details", {
      id: data.id,
      type: data.type,
    })
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data.backdrop_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` : DEFAULT_IMAGE,
        }}
      />

      <LinearGradient colors={["transparent", COLORS.DARK_PRIMARY]} locations={[0, 1]} style={styles.row}>
        <Text style={styles.title}>{data.title}</Text>

        <Genres data={data.genres} textAlign="center" />

        <View style={styles.content}>
          <Average vote_average={data.vote_average} />

          <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={navigateToDetails}>
            <Ionicons name="play" size={16} color={COLORS.DARK_PRIMARY} />
            <Text style={styles.button_text}>Assistir</Text>
          </TouchableOpacity>

          <MediaIcon type={data.type} />
        </View>
      </LinearGradient>
    </View>
  );
}