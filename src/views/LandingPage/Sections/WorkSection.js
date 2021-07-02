import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import CustomButton from "components/CustomButtons/Button.js";
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  CircularProgress,
} from "@material-ui/core";
import Muted from "components/Typography/Muted";

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
    transfer: "",
  };
  const [form, setForm] = React.useState(initialForm);
  const [alert, setAlert] = React.useState({
    success: false,
    error: false,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const submit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxndsJeKWVbOoeuLtUuD_W50kfLZyM_rOPt9oKcPbneYUhIesY_KkcwZ8S8qkJK8Q1p/exec";
    const formElement = document.forms["daftar-pelatihan-kinemaster"];

    fetch(scriptURL, { method: "POST", body: new FormData(formElement) })
      .then((res) => {
        console.log("Success! ", res);
        setAlert({ ...alert, success: true });
        setForm(initialForm);
      })
      .catch((e) => {
        console.log("Error! ", e);
        setAlert({ ...alert, error: true });
      })
      .finally(() => setIsLoading(false));
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
          {alert.success && (
            <SnackbarContent
              message={
                <span>
                  <b>Berhasil:</b> mendaftar pelatihan
                </span>
              }
              close
              color="success"
              icon={Check}
            />
          )}
          {alert.error && (
            <SnackbarContent
              message={
                <span>
                  <b>Gagal: </b> periksa koneksi anda
                </span>
              }
              close
              color="danger"
              icon="info_outline"
            />
          )}
          <form onSubmit={submit} name="daftar-pelatihan-kinemaster">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nama Panggilan *"
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
                    name: "nama_panggilan",
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
                    name: "nama_lengkap",
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
                    name="sapaan"
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
                    type: "tel",
                    value: form.whatsApp,
                    onChange: (event) =>
                      setForm({ ...form, whatsApp: event.target.value }),
                    required: true,
                    name: "whatsapp",
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
                    type: "tel",
                    value: form.telegram,
                    onChange: (event) =>
                      setForm({ ...form, telegram: event.target.value }),
                    required: false,
                    name: "telegram",
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
                    name: "email",
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
                    name: "kota",
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
                    name="bisnis"
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
                    name="agama"
                  >
                    <MenuItem value="Islam">Islam</MenuItem>
                    <MenuItem value="Kristen">Kristen</MenuItem>
                    <MenuItem value="Katolik">Katolik</MenuItem>
                    <MenuItem value="Hindu">Hindu</MenuItem>
                    <MenuItem value="Budha">Budha</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControl} fullWidth={true}>
                  <InputLabel id="demo-simple-select-helper-label-transfer">
                    Transfer *
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label-transfer"
                    id="demo-simple-select-helper-transfer"
                    value={form.transfer}
                    onChange={(event) =>
                      setForm({ ...form, transfer: event.target.value })
                    }
                    name="transfer"
                  >
                    <MenuItem value="sudah">Sudah</MenuItem>
                    <MenuItem value="belum">Belum</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem className={classes.require} xs={12} sm={12} md={12}>
                <Muted>Tanda * wajib diisi</Muted>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.button}>
                <CustomButton
                  color="primary"
                  fullWidth={true}
                  disabled={isLoading}
                  type="submit"
                >
                  Daftar
                </CustomButton>
                {isLoading && (
                  <CircularProgress size={23} className={classes.loading} />
                )}
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
