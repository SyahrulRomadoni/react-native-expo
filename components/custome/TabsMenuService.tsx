import React from 'react';
import { Image, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

type ServiceItem = {
  name: string;
  image: string;
  badge?: string | null;
};

type ServicesGridProps = {
  data: ServiceItem[];
  onTrigger: (item: ServiceItem) => void;
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ data, onTrigger }) => {

	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
      }}
    >
      {data.map((item, idx) => (
        <View
          key={idx}
          style={{
            alignItems: 'center',
            width: '25%',
            marginBottom: 10,
          }}
        >
          {item.badge ? (
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 12,
                  paddingHorizontal: 20,
                  paddingVertical: 2,
                  marginBottom: 2,
                  borderRadius: 10,
                  textAlign: 'center',
                  backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                  color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
                }}
              >
                {item.badge}
              </Text>
            </View>
          ) : (
            <View style={{ height: 20, marginBottom: 2 }} />
          )}

          <TouchableOpacity
            onPress={() => onTrigger(item)}
            style={{ width: 50, height: 50, marginBottom: 5 }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <Text style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>
            {item.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ServicesGrid;
