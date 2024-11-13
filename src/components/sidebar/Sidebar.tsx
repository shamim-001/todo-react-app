import { Grid2 } from "@mui/material";
import { FC, ReactElement } from "react";
import Profile from "../profile/Profile";

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid2
      size={{ md: 4 }}
      sx={{
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Profile name="John" />
    </Grid2>
  );
};

export default Sidebar;
