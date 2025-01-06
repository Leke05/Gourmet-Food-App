import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {dishData, imageData} from '../data';

const PickCard = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Your trusted picks</Text>
        <TouchableOpacity>
          <Text style={styles.headerLink}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        {dishData?.map(({id, imgKey, ratingInfo, name, prepTime, price}) => (
          <View style={styles.card} key={id}>
            <View style={styles.starContainer}>
              {ratingInfo?.map(star => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <Icon
                    name={star <= rating ? 'star' : 'star-outline'}
                    type="material-community"
                    size={20}
                    color={star <= rating ? '#FFD700' : '#CCCCCC'}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <Image source={imageData[imgKey]} style={styles.img} />

            <View style={styles.cardSubHeaderContainer}>
              <Text style={styles.cardSubHeaderText}>{name}</Text>
              <View style={styles.distance}>
                <Icon name="clock-o" type="font-awesome" size={16} />
                <Text>{`${prepTime}`}</Text>
              </View>
              <View style={styles.addContainer}>
                <Text style={styles.addText}>{`$${price}`}</Text>
                <TouchableOpacity>
                  <Icon
                    name="plus"
                    type="font-awesome"
                    size={16}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PickCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerLink: {
    fontSize: 14,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 8,
    gap: 15,
  },
  card: {
    width: 170,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#777E8B',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
    position: 'absolute',
    top: 33,
    left: 33,
  },
  starContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 8,
    right: 8,
  },
  cardSubHeaderContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
  cardSubHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 8,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  addText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  plusIcon: {
    backgroundColor: '#000000',
  },
});
