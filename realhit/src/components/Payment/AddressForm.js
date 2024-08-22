import React, { useContext, useEffect, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { PaymentContex } from "../../contexts/Context";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm() {
  const [PaymentUser, setPaymentUser] = useState({
    firstname: "",
    lastname: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const { setShippingDetails } = useContext(PaymentContex);

  // console.log("PaymentUser-----", PaymentUser);
  const PaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentUser({ ...PaymentUser, [name]: value });
  };

  useEffect(() => {
    setShippingDetails(PaymentUser);
  }, [PaymentUser]);

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
          name="firstname"
          value={PaymentUser.firstname}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          type="last-name"
          placeholder="Snow"
          autoComplete="last name"
          required
          size="small"
          name="lastname"
          value={PaymentUser.lastname}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
          name="address1"
          value={PaymentUser.address1}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="address2"
          type="address2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          size="small"
          name="address2"
          value={PaymentUser.address2}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
          name="city"
          value={PaymentUser.city}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
          name="state"
          value={PaymentUser.state}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          type="number"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
          name="postalCode"
          value={PaymentUser.postalCode}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          type="text"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
          name="country"
          value={PaymentUser.country}
          onChange={PaymentChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
