import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Platform, Text, View, useColorScheme } from 'react-native';

interface BannerItem {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
}

interface BannerListProps {
  data: BannerItem[];
}

const BannerList: React.FC<BannerListProps> = ({ data}) => {

	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

  return (
    <>
      {data.map((banner) => (
        <View
          key={banner.id}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 6,
            marginHorizontal: 10,
            marginVertical: 5,
            backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)',
          }}
        >
          <Image
            style={{
              width: '100%',
              height: 180,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
            source={{ uri: banner.image }}
          />
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                width: '100%',
              }}
            >
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 16 : 17,
                  color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                  flex: 1,
                  fontWeight: 'bold',
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {banner.title}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 12 : 14,
                  color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                }}
              >
                {banner.subtitle}
              </Text>
              <Feather name="star" size={20} color="rgb(140, 140, 140)" />
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default BannerList;
