import React from "react";
import { Box } from "@mui/material";

type Props = {
  msg: string;
};

const FirstLoading: React.FC<Props> = props => {
  const { msg } = props;
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {msg}
    </Box>
  );
};
export default FirstLoading;
