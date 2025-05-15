import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

interface RestoItem {
  id: string | number;
  namaResto: string;
  image: string;
  jarakTempuh: string;
  durasiWaktu: string;
  rating: string;
}

interface Props {
  data: RestoItem[];
  onTrigger?: (item: RestoItem) => void;
}

const RestoCardList: React.FC<Props> = ({ data, onTrigger }) => {
  
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={[
          {
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 5,
            gap: 10,
          },
        ]}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id || index}
            activeOpacity={0.7}
            onPress={() => onTrigger && onTrigger(item)}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 6,
              width: 250,
              height: Platform.OS === 'ios' ? 280 : 290,
              backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)',
            }}
          >
            <Image
              style={{
                width: '100%',
                height: 150,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
              source={{ uri: item.image }}
            />
            <View style={{ padding: 10, flex: 1, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 13 : 15,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                  }}
                >
                  {item.jarakTempuh} - {item.durasiWaktu}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 14 : 18,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                    fontWeight: 'bold',
                    textAlign: 'left',
                  }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.namaResto}
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Feather name="star" size={20} color="rgb(140, 140, 140)" />
                <Text
                  style={{
                    fontSize: 14,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                  }}
                >
                  {item.rating}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default RestoCardList;
