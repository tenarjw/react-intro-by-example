import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import regularCardStyle from 'assets/jss/material-dashboard-react/regularCardStyle';
import {default as cx} from 'classnames';
import * as React from 'react';

interface RegularCardProps {
  classes? : any,
  plainCard?: boolean;
  headerColor?: 'grey' | 'green' | 'red' | 'blue'| 'bluegrey' ;
  cardTitle?: React.ReactNode;
  cardSubtitle?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
} 

interface Props {
  classes: {
    card: string;
    cardActions: string;
    cardHeader: string;
    cardPlain: string;
    cardPlainHeader: string;
    cardSubtitle: string;
    cardTitle: string;
  };

  plainCard?: boolean;
  headerColor?: 'grey' | 'green' | 'red' | 'blue'| 'bluegrey' ;
  cardTitle?: React.ReactNode;
  cardSubtitle?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

class RegularCard extends React.Component<RegularCardProps> {

  public render() {
    const {
      classes ,
      headerColor,
      plainCard,
      cardTitle,
      cardSubtitle,
      content,
      footer,
    } = this.props;

    const plainCardClasses = cx({
      [' ' + classes.cardPlain]: plainCard,
    });

    const cardPlainHeaderClasses = cx({
      [' ' + classes.cardPlainHeader]: plainCard,
    });

    return (
      <Card className={classes.card + plainCardClasses}>
        <CardHeader
          classes={{
            root:
              classes.cardHeader +
              ' ' 
              +
              classes[headerColor + 'CardHeader'] +  cardPlainHeaderClasses
              ,
            title: classes.cardTitle,
            subheader: classes.cardSubtitle,
          }}
          title={cardTitle}
          subheader={cardSubtitle}
        />
        <CardContent>{content}</CardContent>
        {footer !== undefined ? (
          <CardActions className={classes.cardActions}>{footer}</CardActions>
        ) : null}
      </Card>
    );
  }
}

export default withStyles(regularCardStyle)(RegularCard);
