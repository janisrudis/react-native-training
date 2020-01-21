import * as React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {background, Px14, white, hot, textColor, gray, Px11, Px16, deviceWidth, dark} from '../../../../Style/Style';
import {gql} from 'apollo-boost';
import LinearGradient from 'react-native-linear-gradient';
import Heart from '../../../../Assets/icons/heart.svg';


export interface RatingProps {
  stars: number;
}
export interface BrandProps {
  id: string;
  name: string;
}

export interface ItemProps {
  name: string;
  id: string;
  discountPercentage: number;
  price: number;
  ratings: RatingProps[]
  image: {
    url: string;
  };
  brand: BrandProps[]
}

export interface ItemsProps {
  items: ItemProps[];
}

export interface ItemsState {}

export interface AppProps {}

const FETCH_ITEMS = gql`
{
  items {
    id
    name
    discountPercentage
    price
    brand {
      id
      name
    }
    image {
      url(transformation: {image: {resize: {width: 200, height: 200, fit: crop}}})
    }
    ratings {
      stars
    }
  }
}

`;

export const ItemCards: React.FC = () => {
  const {loading, data} = useQuery<ItemsProps>(FETCH_ITEMS);
  if (loading || !data) {
    return <ActivityIndicator />;
  }
  const {items} = data;
  return <ItemCard items={items} />;
};

class ItemCard extends React.Component<ItemsProps, ItemsState> {
  constructor(props: ItemsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {items} = this.props;
    const cardWidth = deviceWidth / 2 - 24;
    const cardHeight = cardWidth * 1.135;

    const average = (array: number[]) =>
      array.reduce((a, b) => a + b) / array.length;

    const saturate = (string: string) =>
      `#${string[1]}${string[2]}${string[3]}${string[4]}13`;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingVertical: 16,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {items.map((item: ItemProps) => (
          <View
                key={item.name}
                style={{width: cardWidth, marginBottom: 26}}
              >
              
                <ImageBackground
                source={{uri: item.image.url}}
                  style={[styles.image, {height: cardHeight}]}
                >
                  {item.discountPercentage === null ? null : (
                    <Text
                      style={{
                        backgroundColor: hot,
                        color: textColor,
                        position: 'absolute',
                        padding: 5,
                        borderRadius: 29,
                        fontSize: 14,
                        top: 7,
                        left: 7,
                      }}
                    >
                      -{item.discountPercentage}%
                    </Text>
                  )}
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: dark,
                      borderRadius: 50,
                      height: 36,
                      width: 36,
                      justifyContent: 'center',
                      alignItems: 'center',
                      bottom: -18,
                      right: 0,
                    }}
                  >
                    <Heart />
                  </View>
                </ImageBackground>

                <View>
                {
                  <Text style={{color: gray, marginVertical: 7}}>
                    {item.ratings.length > 0
                      ? [...Array(average(item.ratings.map(res => res.stars)))].map(() => '⭐')
                      : null}
                    ({item.ratings.length})
                  </Text>
                    }
                </View>
                <Px11 style={{color: gray}}>{item.brand.name}</Px11>

                <Px16 style={{color: textColor, marginBottom: 3}}>
                  {item.name}
                </Px16>

                {item.discountPercentage === null ? (
                  <Px14 style={{color: textColor}}>{item.price}$</Px14>
                ) : (
                  <Px14>
                    <Px14
                      style={{
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        color: gray,
                      }}
                    >
                      {item.price}$
                    </Px14>

                    <Px14 style={{color: hot, marginHorizontal: 4}}>
                      {item.price * (1 - item.discountPercentage / 100)}$
                    </Px14>
                  </Px14>
                )}
              </View>
        ))}
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  padding: {paddingVertical: 8},
  image: {borderRadius: 8},
});
