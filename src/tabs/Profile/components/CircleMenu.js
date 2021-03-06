import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Core components
import ZailaText from 'zaila/src/core/ZailaText';

const CircleMenu = ({ currentMenu = 'Zaila', handleSwitchMenu, position }) => {
  return (
    <>
      <View style={{ backgroundColor: 'transparent' }}>
        <View style={styles.circleContainer}>
          <View style={[styles.activeMenu, position]}></View>
          <Image
            style={styles.userSnapshot}
            source={require('zaila/assets/img/user-snapshot.png')}
          />
          <TouchableOpacity
            style={styles.settings}
            onPress={(e) => handleSwitchMenu('settings')}
          >
            <Image
              style={{ width: 45, height: 45 }}
              source={require('zaila/assets/img/profile-icons/settings.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zaila}
            onPress={(e) => handleSwitchMenu('zaila')}
          >
            <Image
              style={{ width: 45, height: 45 }}
              source={require('zaila/assets/img/profile-icons/zaila-acitive.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.history}
            onPress={(e) => handleSwitchMenu('history')}
          >
            <Image
              style={{ width: 45, height: 50 }}
              source={require('zaila/assets/img/profile-icons/history-normal.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.badge}
            onPress={(e) => handleSwitchMenu('badge')}
          >
            <Image
              style={{ width: 30, height: 45 }}
              source={require('zaila/assets/img/profile-icons/badge-normal.png')}
            />
          </TouchableOpacity>
          <View style={styles.border1}></View>
          <View style={styles.border2}></View>
        </View>
      </View>
      <ZailaText bold style={styles.currentMenuText}>
        {currentMenu}
      </ZailaText>
    </>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 200,
    borderColor: '#F79839',
    borderWidth: 2,
    marginTop: 16,
    marginBottom: 8,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  activeMenu: {
    backgroundColor: '#F79839',
    width: 125,
    height: 125,
    position: 'absolute',
    zIndex: 2
    // right: 0,
    // top: 0
  },
  userSnapshot: {
    zIndex: 3
  },
  settings: {
    position: 'absolute',
    top: 40,
    left: 40,
    zIndex: 3
  },
  zaila: {
    position: 'absolute',
    top: 40,
    right: 40,
    zIndex: 3
  },
  badge: {
    position: 'absolute',
    bottom: 40,
    right: 45,
    zIndex: 3
  },
  history: {
    position: 'absolute',
    bottom: 38,
    left: 40,
    zIndex: 3
  },
  currentMenuText: {
    color: '#276180',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginTop: 8
  },
  border1: {
    height: 2,
    width: '100%',
    backgroundColor: '#F79839',
    position: 'absolute',
    zIndex: 2
  },
  border2: {
    height: '100%',
    width: 2,
    backgroundColor: '#F79839',
    position: 'absolute',
    zIndex: 2
  }
});

export default CircleMenu;
