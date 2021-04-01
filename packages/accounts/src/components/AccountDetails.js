import React from "react";
import clsx from "clsx";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  column: {
    flexBasis: "33.33%",
  },
}));

export function AccountDetails({ account }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.column}>
        <ul>
          {account.details &&
            account.details.map((item) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="left"
                key={item.key}
              >
                {item.key} {item.value}
              </Typography>
            ))}
        </ul>
      </div>
      {/* <div className={clsx(classes.column, classes.helper)}>
        <Typography variant="caption">
          Select your destination of choice
          <br />
          <a href="#secondary-heading-and-columns" className={classes.link}>
            Learn more
          </a>
        </Typography>
      </div>
      <div className={classes.column}>
        <Chip label="Barbados" onDelete={() => {}} />
        <Chip label="Cisco" />
      </div> */}
    </>
  );
}
