import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dummy data
  const servicesData = [
    {
      id: 1,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 2,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 3,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 4,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 5,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 6,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 7,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 8,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
  ];

  const bannerList = [
    {
      id: 1,
      image: 'https://lelogama.go-jek.com/post_featured_image/promo-tokopedia-agustus.jpg',
      title: 'Promo Tokopedia WIB Kali Ini Edisi Spesial Ulang Tahun!',
      subtitle: 'Diskon s.d 35RB pake GoRide & GoCar!',
    },
    {
      id: 2,
      image: 'https://lelogama.go-jek.com/post_featured_image/promo-kesebelasan-Anniv_GoFood_Blog-Banner_1456x818_200rb.jpg',
      title: 'Promo Kesebelasan GoFood: Diskon s.d 200rb & diskon ongkir',
      subtitle: 'Diskon 50% untuk pengguna baru!',
    },
    {
      id: 3,
      image: 'https://lelogama.go-jek.com/post_featured_image/Screenshot_2023-09-14_104658.png',
      title: 'Promo Hari Perhubungan Nasional!',
      subtitle: 'Cashback hingga 75RB dengan GoPay!',
    },
  ];

  const restoData = [
    {
      image: 'https://lelogama.go-jek.com/cms_editor/2018/06/29/Januari_JKT_Martabak.jpg',
      jarakTempuh: '2.73 km',
      durasiWaktu: '25-35 min',
      namaResto: 'Martabak 99 masakan manis gurih legit',
      rating: '4.8 - 3rb+ rating',
    },
    {
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
      jarakTempuh: '1.2 km',
      durasiWaktu: '15-25 min',
      namaResto: 'Bakso Bakar Super Mantap Jiwa',
      rating: '4.7 - 2rb+ rating',
    },
    {
      image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a50bc893-f54e-4ff0-b669-565231d3a715_Go-Biz_20220223_225110.jpeg',
      jarakTempuh: '3.5 km',
      durasiWaktu: '30-40 min',
      namaResto: 'Mie Ayam Level Pedas Mampus',
      rating: '4.5 - 1rb+ rating',
    },
  ];

  return (
    // SafeAreaView
    <SafeAreaView style={{ flex: 1 }}>

      {/* Search Bar + Profile */}
      <View
        style={[
          styles.fixedTop,
          { backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)' }
        ]}
      >

        {/* Input Search */}
        <View
          style={[
            styles.inputGroup,
            { backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(240, 240, 240)' }
          ]}
        >
          <Feather
            name="search"
            style={{
              fontSize: 20,
              marginLeft: 5,
              color: isDark ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 0)'
            }}
          />
          <TextInput
            placeholder="Pecel Lele, Bandeng..."
            style={{
              flex: 1,
              marginLeft: 6,
            }}
          />
        </View>
        {/* End Input Search */}

        {/* Profile */}
        <TouchableOpacity>
          <Feather
            name="user"
            style={[
              styles.iconAndBorder,
              {
                backgroundColor: 'rgb(25, 200, 20)',
                color: 'rgb(255, 255, 255)',
              }
            ]}
        />
        </TouchableOpacity>
        {/* End Profile */}

      </View>
      {/* End Search Bar + Profile */}

      {/* ScrollView */}
      <ScrollView style={{ flex: 1 }}>
        
        {/* Container*/}
        <View
          style={[
            styles.container,
            { backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }
          ]}
        >

          {/* Banner */}
          <View>
            <Image
              style={styles.bannerTop}
              source={{ uri: 'https://play-lh.googleusercontent.com/IT-4gpRmMwvtYlw5M3JbamStGWlDArwYDXaWex0kbhEy-jyb5txK2Ri4GtS6syghui8' }}
            />
          </View>
          {/* End Banner */}

          {/* Balance Section */}
          <View
            style={ [
              styles.card,
              styles.rowBalance,
              {
                backgroundColor: isDark ? 'rgb(28,28,28)' : 'rgb(255, 255, 255)'
              }
            ]}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                }}
              >Rp 99.000.000</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                }}
              >99.000.000 coins</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={styles.iconGroup}
              >
                <Feather
                  name="send"
                  style={[
                    styles.iconAndBorder,
                    {
                      backgroundColor: 'rgb(25, 200, 20)',
                      color: 'rgb(255, 255, 255)',
                    }
                  ]}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                  }}
                >Bayar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconGroup}
              >
                <Feather
                  name="plus-circle"
                  style={[
                    styles.iconAndBorder,
                    {
                      backgroundColor: 'rgb(25, 200, 20)',
                      color: 'rgb(255, 255, 255)',
                    }
                  ]}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                  }}
                >Top Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconGroup}
              >
                <Feather
                  name="more-horizontal"
                  style={[
                    styles.iconAndBorder,
                    {
                      backgroundColor: 'rgb(25, 200, 20)',
                      color: 'rgb(255, 255, 255)',
                    }
                  ]}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                  }}
                >Lainya..</Text>
              </TouchableOpacity>

            </View>
          </View>
          {/* End Balance Section */}

          {/* Services */}
          <View style={styles.rowService}>
            {servicesData.map((item, idx) => (
              <View
                key={idx}
                style={{
                  alignItems: 'center',
                  width: 95,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={[
                    styles.bridge,
                    {
                      backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                      color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
                    }
                  ]}
                >{item.badge}</Text>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: '90%',
                    height: 80,
                    borderRadius: 10,
                    marginBottom: 5,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)', }}>{item.name}</Text>
              </View>
            ))}
          </View>
          {/* End Services */}          

          {/* Label */}
          <Text
            style={{
              marginHorizontal: 16,
              fontWeight: 'bold',
              fontSize: 25,
              color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            }}
          >Tebus murah !!</Text>
          {/* End Label */}

          {/* Promo Info */}
          <View
            style={{
              backgroundColor: 'rgba(130, 239, 84, 0.3)',
              padding: 10,
              marginHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
              }}
            >Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus plus plus</Text>
          </View>
          {/* End Promo Info */}

          {/* Rating Resto */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                marginTop: 10,
                gap: 10,
              }}
            >
              {restoData.map((item, index) => (
                <View
                    key={index}
                    style={[
                      styles.cardTitle,
                      {
                        width: 250,
                        height: 280,
                        borderRadius: 12,
                        marginBottom: 10,
                        backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)',
                      }
                    ]}
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
                  <View style={{ padding: 10 }}>
                    {/* Jarak Waktu */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <Text
                        style={{
                            fontSize: 15,
                            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                        }}
                      >{item.jarakTempuh} - {item.durasiWaktu}</Text>
                    </View>
                    {/* Text */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        marginTop: 10,
                        marginBottom: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                          flex: 1,
                          fontWeight: 'bold',
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >{item.namaResto}</Text>
                    </View>
                    {/* Rating */}
                    <View
                      style={{ 
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <Feather name="star" size={20} color="rgb(140, 140, 140)" />
                      <Text
                        style={{
                          fontSize: 14,
                          color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                        }}
                      >{item.rating}</Text>
                    </View>

                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          {/* End Rating Resto */}

          {/* Label */}
          <Text
            style={{
              marginHorizontal: 16,
              fontWeight: 'bold',
              fontSize: 25,
              color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            }}
          >Tebus murah !!</Text>
          {/* End Label */}
          
          {/* Promo Info */}
          <View
            style={{
              backgroundColor: 'rgba(130, 239, 84, 0.3)',
              padding: 10,
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
              }}
            >Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus plus plus</Text>
          </View>
          {/* End Promo Info */}

          {/* Banner Section */}
          {bannerList.map((banner) => (
            <View
              key={banner.id}
              style={[
                styles.cardTitle,
                {
                  marginHorizontal: 10,
                  marginVertical: 5,
                  backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)'
                }
              ]}
            >
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
                source={{ uri: banner.image }}
              />
              <View style={{
                paddingTop: 10,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
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
                      fontSize: 20,
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
                <View
                  style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                    }}
                  >
                    {banner.subtitle}
                  </Text>
                  <Feather name="star" size={20} color="rgb(140, 140, 140)" />
                </View>
              </View>
            </View>
          ))}
          {/* End Banner Section */}

          {/* Label */}
          <Text
            style={{
              marginHorizontal: 16,
              fontWeight: 'bold',
              fontSize: 25,
              color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            }}
          >Tebus murah !!</Text>
          {/* End Label */}

          {/* Rating Resto */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                marginTop: 10,
                gap: 10,
              }}
            >
              {restoData.map((item, index) => (
                <View
                    key={index}
                    style={[
                      styles.cardTitle,
                      {
                        width: 250,
                        height: 280,
                        borderRadius: 12,
                        marginBottom: 10,
                        backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)',
                      }
                    ]}
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
                  <View style={{ padding: 10 }}>
                    {/* Jarak Waktu */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <Text
                        style={{
                            fontSize: 15,
                            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                        }}
                      >{item.jarakTempuh} - {item.durasiWaktu}</Text>
                    </View>
                    {/* Text */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        marginTop: 10,
                        marginBottom: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                          flex: 1,
                          fontWeight: 'bold',
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >{item.namaResto}</Text>
                    </View>
                    {/* Rating */}
                    <View
                      style={{ 
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <Feather name="star" size={20} color="rgb(140, 140, 140)" />
                      <Text
                        style={{
                          fontSize: 14,
                          color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                        }}
                      >{item.rating}</Text>
                    </View>

                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          {/* End Rating Resto */}
          
        </View>
        {/* End Container */}

      </ScrollView>
      {/* End ScrollView */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixedTop: {
    // Fixed to top
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Border radius
    borderRadius: 20,
    // Padding
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
    // Shadow
    // - Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // - iOS
    elevation: 4,
  },
  container: {
    paddingTop: 90,
    paddingBottom: 130,
  },
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  cardTitle: {
    
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },

  inputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 20,
  },
  bannerTop: {
    width: '100%',
    height: 200,
  },
  iconGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  iconAndBorder: {
    borderRadius: 50,
    padding: 10,
    fontSize: 20
  },
  rowBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowService: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bridge: {
    padding: 5,
    width: 60,
    marginBottom: 2,
    fontSize: 14,
    alignSelf: 'flex-start',
    borderTopStartRadius: 0,
    borderTopEndRadius: 15,
    borderEndStartRadius: 15,
    borderEndEndRadius: 0,
    textAlign: 'center',
  },
});
