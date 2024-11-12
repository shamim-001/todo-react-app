import { FC, ReactElement } from "react";
import { Grid2 } from "@mui/material";

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ md: 8 }}>
        <h2>Content Area</h2>
      </Grid2>
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
        <h2>Sidebar Area</h2>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
