import Image from "react";
import ApplTree from "./images/ApplTree.PNG";
import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
} from "../types";

const Gloves =
  "https://images-na.ssl-images-amazon.com/images/G/01/BISS/PersonalProtectiveHero._CB443702246_SR300_.jpg";

 const initialState = {
  basket: [
    {
      id: 21345678,
      title: "T5.5 Qt. 12-Speed Red Stand Mixer with Accessories by Cuisinart",
      image: Gloves,
      price: 259.96,
      rating: 4,
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
export default function (state = initialState, action) {
// }
// const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for Removing item from basket
      //    Cloned the basket
      let newBasket = [...state.basket];

      // Check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item  exists in basket, remove it....
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

