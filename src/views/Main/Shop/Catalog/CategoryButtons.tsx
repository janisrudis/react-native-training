import * as React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {background, Px14, white} from '../../../../Style/Style';
import {dark} from 'react-syntax-highlighter/dist/styles/hljs';
import {gql} from 'apollo-boost';

export interface CategoriesProps {
  name: string;
  id: string;
}

export interface CategoryButtonsProps {
  categories: CategoriesProps[];
}

export interface AppState {}

export interface AppProps {}

const EXCHANGE_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

export const CategoryButtons: React.FC = () => {
  const {loading, data} = useQuery<CategoryButtonsProps>(EXCHANGE_CATEGORIES);
  if (loading || !data) {
    return <ActivityIndicator />;
  }
  const {categories} = data;
  return <CategoryButtonsLoaded categories={categories} />;
};

class CategoryButtonsLoaded extends React.Component<CategoryButtonsProps, AppState> {
  constructor(props: CategoryButtonsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {categories} = this.props;
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{backgroundColor: background, marginBottom: 18, marginTop: 8}}
      >
        {categories.map((res: CategoriesProps) => (
          <View key={res.id}>
            <Px14
              style={{
                backgroundColor: white,
                color: dark,
                borderRadius: 29,
                marginRight: 7,
                paddingVertical: 8,
                paddingHorizontal: 12,
              }}
            >
              {res.name}
            </Px14>
          </View>
        ))}
      </ScrollView>
    );
  }
}
