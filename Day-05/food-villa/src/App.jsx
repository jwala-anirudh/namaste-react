import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Default import
 * import Header from "./components/Header";
 * import NewHeader from "./components/Header";
 *    We can rename it to a different value
 *
 * Named import(s)
 * import { Title } from "./components/Header";
 *    Example createRoot import style
 *
 * import * as Obj from "./components/Header";
 *    <Obj.Title /> Example of React.Fragment
 * **/

/**
 * Website design
 * =========================
 * Header
 *  - Logo (Title)
 *  - Nav items (right side)
 *  - Cart
 * Body
 *  - Search bar
 *  - Restraunt list
 *    - RestrauntCard (many cards)
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - Links
 *  - Copyright
 */

// Config driven UI
const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No delivery charge",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "KFC",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
        cusines: ["American", "Snack", "Biryani"],
        rating: "4.2",
      },
      {
        name: "KFC",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
        cusines: ["American", "Snack", "Biryani"],
        rating: "4.2",
      },
      {
        name: "KFC",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
        cusines: ["American", "Snack", "Biryani"],
        rating: "4.2",
      },
    ],
  },
];

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
