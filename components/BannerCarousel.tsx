import React from 'react';
import { Dimensions, Image, Platform, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface BannerCarouselProps {
  data: { id: number; image: string }[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ data }) => {
  const width = Dimensions.get('window').width;

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={Platform.OS === 'ios' ? 200 : 210}
        autoPlay
        data={data}
        scrollAnimationDuration={2000}
        autoPlayInterval={10000}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
};

export default BannerCarousel;
