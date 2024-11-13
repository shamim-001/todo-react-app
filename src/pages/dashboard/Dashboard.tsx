import { FC, ReactElement } from "react";
import { Grid2 } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Taskarea from "../../components/taskarea/Taskarea";
const Dashboard: FC = (): ReactElement => {
  return (
    <Grid2 container spacing={2}>
      <Taskarea />
      <Sidebar />
    </Grid2>
  );
};

export default Dashboard;
