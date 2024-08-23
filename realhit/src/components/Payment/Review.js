import React, { useContext } from "react";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CartContex, PaymentContex } from "../../contexts/Context";

export default function Review() {
  const { cardDetails, ShippingDetails, ProductDetails, finalTotal } =
    useContext(PaymentContex);
  const { total } = useContext(CartContex);

  const addresses = [ShippingDetails.address, ShippingDetails.city];

  const cardNumber = cardDetails.cardNumber;
  const last4Digits = cardNumber.slice(-4);
  const maskedCardNumber =
    cardNumber
      .slice(0, -4) // Get the part before the last 4 digits
      .replace(/\d/g, "x") // Replace all digits with 'x'
      .replace(/\s+/g, "") // Remove spaces
      .replace(/(.{4})/g, "$1-") // Add hyphens every 4 digits
      .slice(0, -1) + // Remove the trailing hyphen
    last4Digits; // Append the last 4 digits
  const payments = [
    { name: "Card type:", detail: cardDetails.paymentType },
    { name: "Card holder:", detail: cardDetails.Cardholder },
    { name: "Card number:", detail: maskedCardNumber },
    { name: "Expiry date:", detail: cardDetails.expirationDate },
  ];

  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText
            primary="Products"
            secondary={`${ProductDetails.length} selected`}
          />
          <Typography variant="body2">Rs.{total}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2">Rs.50</Typography>
        </ListItem>
        <Divider sx={{ bgcolor: "#D1D8C5" }} />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs.{finalTotal}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom>
            {ShippingDetails.firstname + " " + ShippingDetails.lastname}
          </Typography>
          <Typography gutterBottom sx={{ color: "text.secondary" }}>
            {addresses.join(", ")}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: "100%", mb: 1 }}
                >
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
