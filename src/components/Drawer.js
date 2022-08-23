import React from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  ListSubheader,
  Box,
} from "@mui/material";
import {
  Code,
  GitHub,
  Javascript,
  CodeSharp as Reactjs,
  Html,
  Book as Blog,
  CardMembership as Certifications,
  Dashboard,
} from "@mui/icons-material";
const DrawerComponent = () => {
  const [items] = React.useState({
    learningPaths: [
      { label: "Frontend", Icon: Reactjs, path: "frontend" },
      { label: "Backend", Icon: Code, path: "frontend" },
      { label: "Fullstack", Icon: Javascript, path: "frontend" },
      { label: "Version control", Icon: GitHub, path: "frontend" },
    ],
    PlayGrounds: [
      { label: "Javascript playground", Icon: Javascript, path: "frontend" },
      { label: "Html and CSS playground", Icon: Html, path: "frontend" },
      { label: "React playground", Icon: Reactjs, path: "frontend" },
      { label: "Node js playground", Icon: Code, path: "frontend" },
    ],
    Forum: [
      { label: "Frontend Forum", Icon: Javascript, path: "frontend" },
      { label: "Backend Forum", Icon: Code, path: "frontend" },
      { label: "Fullstack forum", Icon: Code, path: "frontend" },
    ],
    Blog: [{ label: "Coders blog", Icon: Blog, path: "frontend" }],
    Certifications: [
      { label: "Frontend certifications", Icon: Certifications, path: "frontend" },
      { label: "Backend", Icon: Certifications, path: "frontend" },
      { label: "Other certifications", Icon: Certifications, path: "frontend" },
    ],
    Dashboard: [{ label: "My Dashboard", Icon: Dashboard, path: "frontend" }],
  });

  const ListItems = ({ items }) => {
    return (
      <>
        {items.map(({ label, Icon, path }, i) => {
          return (
              <ListItem key={i} component={Link} to={`/${path}`}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText>{label}</ListItemText>
              </ListItem>
          );
        })}
      </>
    );
  };
  return (
    <Drawer
      variant="permanent"
      sx={{ "z-index": 5, display: { xs: "none", sm: "block" } }}
    >
      <List sx={{ marginTop: 7 }}>
        <ListSubheader>Dashboard</ListSubheader>
        <ListItems items={items.Dashboard} />
        <ListSubheader>Learning Paths</ListSubheader>
        <ListItems items={items.learningPaths} />
        <ListSubheader>Playgrounds</ListSubheader>
        <ListItems items={items.PlayGrounds} />
        <ListSubheader>Forum</ListSubheader>
        <ListItems items={items.Forum} />
        <ListSubheader>Certifications</ListSubheader>
        <ListItems items={items.Certifications} />
        <ListSubheader>Blog</ListSubheader>
        <ListItems items={items.Blog} />
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
