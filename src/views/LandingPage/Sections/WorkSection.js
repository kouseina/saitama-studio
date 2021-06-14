import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomButton from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const initialForm = {
    nickName: "",
    fullName: "",
    greeting: "",
    whatsApp: "",
    telegram: "",
    email: "",
    city: "",
    business: "",
    religion: "",
  };
  const [form, setForm] = React.useState(initialForm);

  const submit = (event) => {
    console.log(form);
    event.preventDefault();
  };

  return (
    <div className={classes.section} id="daftarPelatihan">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ikut pelatihan kami</h2>
          <h4 className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quis vero voluptate? Dignissimos modi quaerat eos excepturi odit
            quibusdam, soluta, ad nesciunt eum aliquam facere? Exercitationem,
            nisi.
          </h4>
          <form onSubmit={submit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nama Sapaan *"
                  id="nickName"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                    value: form.nickName,
                    onChange: (event) =>
                      setForm({ ...form, nickName: event.target.value }),
                    required: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nama Lengkap *"
                  id="fullName"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                    value: form.fullName,
                    onChange: (event) =>
                      setForm({ ...form, fullName: event.target.value }),
                    required: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Sapaan *
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={form.greeting}
                    onChange={(event) =>
                      setForm({ ...form, greeting: event.target.value })
                    }
                  >
                    <MenuItem value="Pak">Pak</MenuItem>
                    <MenuItem value="Bu">Bu</MenuItem>
                    <MenuItem value="Mas">Mas</MenuItem>
                    <MenuItem value="Mbak">Mbak</MenuItem>
                    <MenuItem value="Om">Om</MenuItem>
                    <MenuItem value="Tante">Tante</MenuItem>
                    <MenuItem value="Kak">Kak</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nomor WhatsApp *"
                  id="whatsApp"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "number",
                    value: form.whatsApp,
                    onChange: (event) =>
                      setForm({ ...form, whatsApp: event.target.value }),
                    required: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nomor Telegram"
                  id="telegram"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "number",
                    value: form.telegram,
                    onChange: (event) =>
                      setForm({ ...form, telegram: event.target.value }),
                    required: false,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email *"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    value: form.email,
                    onChange: (event) =>
                      setForm({ ...form, email: event.target.value }),
                    required: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Kota *"
                  id="city"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                    value: form.city,
                    onChange: (event) =>
                      setForm({ ...form, city: event.target.value }),
                    required: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-simple-select-helper-label-business">
                    Bisnis *
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label-business"
                    id="demo-simple-select-helper-business"
                    value={form.business}
                    onChange={(event) =>
                      setForm({ ...form, business: event.target.value })
                    }
                  >
                    <MenuItem value="Belum punya Bisnis">
                      Belum punya Bisnis
                    </MenuItem>
                    <MenuItem value="Baru mulai Bisnis">
                      Baru mulai Bisnis
                    </MenuItem>
                    <MenuItem value="Bisnis kurang dari 1 tahun">
                      Bisnis kurang dari 1 tahun
                    </MenuItem>
                    <MenuItem value="Bisnis berjalan 1 - 5 tahun">
                      Bisnis berjalan 1 - 5 tahun
                    </MenuItem>
                    <MenuItem value="Bisnis lebih dari 5 tahun">
                      Bisnis lebih dari 5 tahun
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-simple-select-helper-label-religion">
                    Agama *
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label-religion"
                    id="demo-simple-select-helper-religion"
                    value={form.religion}
                    onChange={(event) =>
                      setForm({ ...form, religion: event.target.value })
                    }
                  >
                    <MenuItem value="Islam">Islam</MenuItem>
                    <MenuItem value="Kristen">Kristen</MenuItem>
                    <MenuItem value="Katolik">Katolik</MenuItem>
                    <MenuItem value="Hindu">Hindu</MenuItem>
                    <MenuItem value="Budha">Budha</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomButton
                  className={classes.button}
                  type="submit"
                  color="primary"
                  fullWidth="true"
                >
                  Daftar
                </CustomButton>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
