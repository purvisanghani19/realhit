import React, { useContext } from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { PaymentContex } from "../../contexts/Context";

function Info({ totalPrice }) {
  const { ProductDetails } = useContext(PaymentContex);

  // const products = [
  //   {
  //     name: "Professional plan",
  //     desc: "Monthly subscription",
  //     price: "$15.00",
  //   },
  //   {
  //     name: "Dedicated support",
  //     desc: "Included in the Professional plan",
  //     price: "Free",
  //   },
  //   {
  //     name: "Hardware",
  //     desc: "Devices needed for development",
  //     price: "$69.99",
  //   },
  //   {
  //     name: "Landing page template",
  //     desc: "License",
  //     price: "$49.99",
  //   },
  // ];

  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        Rs.{totalPrice}
      </Typography>
      <List disablePadding>
        {ProductDetails.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={`Quantity : ${product.quantity}`}
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              Rs.{product.quantity * product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

// Info.propTypes = {
//   totalPrice: PropTypes.string.isRequired,
// };

export default Info;
