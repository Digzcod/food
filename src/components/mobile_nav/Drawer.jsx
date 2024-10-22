import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Link } from "react-router-dom";
import { Badge, Button, ButtonGroup, Divider } from "@mui/material";

export default function DrawerMenu({ open, setOpen, items }) {
  return (
    <div>
      <Drawer open={open} onClose={setOpen}>
        <Box
          sx={{ width: 480 }}
          role="presentation"
          onClick={() => setOpen(!open)}
        >
          <ClearOutlinedIcon
            sx={{
              fontSize: "2.5rem",
              display: "flex",
              ml: "auto",
              mr: ".6rem",
              my: ".5rem",
            }}
          />
          <Divider />

          <ButtonGroup
            color="inherit"
            sx={{ textTransform: "capitalize" }}
            orientation="vertical"
            fullWidth
          >
            <Link to="/">
            <Button sx={{ py: ".6rem" }} variant="text">
              Home
            </Button>
            </Link>
            <Divider />
            <Button sx={{ py: ".6rem" }} variant="text">
              Corporate
            </Button>
            <Divider />
            <Button sx={{ py: ".6rem" }} variant="text">
              Search
            </Button>
            <Divider />
            <Link to="cart">
              <Button sx={{ py: ".6rem" }} variant="text">
                Cart
                <Badge
                  sx={{ mt: "-1.5rem", pl: ".7rem" }}
                  color="primary"
                  badgeContent={items}
                ></Badge>
              </Button>
              <Divider />
            </Link>
            <Button sx={{ py: ".6rem" }} variant="text">
              Login
            </Button>
            <Divider />
          </ButtonGroup>
        </Box>
      </Drawer>
    </div>
  );
}

{
  /* <ListItemText/> */
}
