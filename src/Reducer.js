import { combineReducers } from 'redux';
import _ from 'lodash';

const productItems = [
  {
    product: 'Magsafe',
    id: 1,
    amount: '20.00',
    photo: 'https://ucarecdn.com/b067b087-f830-47d1-aa58-307003539ee4/',
    },
    {
    product: 'Demotech Electric Barbecue',
    id: 2,
    amount: '40.00',
    photo: 'https://ucarecdn.com/e6ef586b-ad65-4ff8-b059-a10826c57542/'
    },
    {
    product: 'Washing Machine',
    id: 3,
    amount: '30.00',
    photo: 'https://ucarecdn.com/24d1297b-02fc-4780-ab64-cf16cac64eaa/'
  },
  {
    product: 'Washing Washing 4',
    id: 4,
    amount: '30.00',
    photo: 'https://ucarecdn.com/24d1297b-02fc-4780-ab64-cf16cac64eaa/'
  }
]

const shop = (state = { cart: [] }, action) => {
  switch(action.type) {
    case 'ON_ADD_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          action.item,
        ],
      };
    case 'REMOVE_CART':
      return {
        cart: state.cart.filter(item => {
          return item.id !== action.item.id;
        })
      }
    default:
      return state;
  }
}

const products = (state = { lists: productItems }, action) => {
  switch(action.type) {
    case 'PRODUCT_LIST':
      return _.assign({}, state, {
        lists: action.data
      })
    default:
      return state;
  }
}

export default combineReducers({
  shop,
  products,
});
