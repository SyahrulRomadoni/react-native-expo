import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      
      {/* Search Bar + Profile */}
      <View style={styles.topBar}>
        <View style={styles.searchInputGroup}>
          <Feather style={styles.searchIconSearch} name="search" size={20} color="gray" />
          <TextInput
            placeholder="Pecel Lele, Bandeng..."
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity>
          <Feather style={styles.searchIconPofile} name="user" size={28} color="#444" />
        </TouchableOpacity>
      </View>

      {/* ScrollView */}
      <ScrollView style={{ flex: 1 }}>
        
        <View style={styles.contentContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/IT-4gpRmMwvtYlw5M3JbamStGWlDArwYDXaWex0kbhEy-jyb5txK2Ri4GtS6syghui8' }}
              style={styles.banner}
            />
          </View>

          {/* Balance Section */}
          <View style={styles.balanceCard}>
            <View>
              <Text style={styles.balanceText}>Rp 99.000.000</Text>
              <Text style={styles.coinText}>99.000.000 coins</Text>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.actionBtn}>
                <Feather style={styles.balanceIcon} name="send" color="#000" />
                <Text style={styles.actionText}>Bayar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Feather style={styles.balanceIcon} name="plus-circle" color="#000" />
                <Text style={styles.actionText}>Top Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Feather style={styles.balanceIcon} name="more-horizontal" color="#000" />
                <Text style={styles.actionText}>Lainnya</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Services */}
          <View style={styles.services}>
            {[
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
              { name: 'GoRide', badge: '5RB' },
            ].map((item, idx) => (
              <View style={styles.serviceItem} key={idx}>
                <Text style={styles.serviceBadge}>{item.badge}</Text>
                <View style={styles.serviceIcon}></View>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Promo Info */}
          <View style={styles.promoInfoText}>
            <Text>Diskon s.d. 10rb/transaksi. Yuk, langganan...</Text>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // Searrch and Profile Icon
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,

    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
  },
  searchIconSearch: {
    color: 'rgb(140, 140, 140)',
    fontSize: 20,
    marginLeft: 5
  },
  searchIconPofile: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'rgb(25, 200, 20)',
    color: 'rgb(255, 255, 255)',
    fontSize: 20
  },

  // Container ScrollView
  contentContainer: {
    backgroundColor: '#fff',
    paddingTop: 130,
    paddingBottom: 130
  },

  // Header dan Banner
  header: {
    paddingHorizontal: 16
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 10
  },

  // Balance Section
  balanceCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  balanceIcon: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'rgb(25, 200, 20)',
    color: 'rgb(255, 255, 255)',
    fontSize: 20
  },
  coinText: {
    fontSize: 14,
    color: '#888',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  actionText: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
  },

  // Services
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10
  },
  serviceItem: {
    alignItems: 'center',
    margin: 10,
    width: 80
  },
  serviceIcon: { 
    width: 50,
    height: 50,
    backgroundColor: '#cce',
    borderRadius: 5,
    marginBottom: 5 
  },
  serviceBadge: { 
    fontSize: 12,
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(0,0,0)',
    paddingHorizontal: 4,
    marginBottom: 2,
    alignSelf: 'flex-start'
  },

  // Promo Info
  promoInfoText: {
    backgroundColor: '#dfffdc',
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 10
  },
});
