import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

import logoModal from "../assets/img/logoModal.png"

function MenuMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          className: "px-12 py-4"
        }}
      >
        <List>
          <img src={ logoModal } className="h-16" alt="Melck" />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText  className="text-center">
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className="text-center">
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className="text-center">
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText className="text-center">
              <Link to="/about">Faq</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className="flex items-center">
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} className="h-max">
          <Menu />
        </IconButton>
      </div>
    </>
  );
}
export default MenuMobile;
