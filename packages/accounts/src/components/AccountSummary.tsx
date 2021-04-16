import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Account } from "../types/Account";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  column: {
    flexBasis: "33.33%",
  },
}));


type AccountSummaryProps = { account: Account };

export function AccountSummary({ account }: AccountSummaryProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.column}>
        <Typography className={classes.heading}>
          {account.vendor || "Unknown"}
        </Typography>
      </div>
      <div className={classes.column}>
        <Typography className={classes.secondaryHeading}>
          {account.type || "General"}
        </Typography>
      </div>
    </>
  );
}
