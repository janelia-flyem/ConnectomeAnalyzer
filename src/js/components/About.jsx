/* global VERSION */
import React from 'react';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 2
  },
  centered: {
    textAlign: 'center'
  },
  spaced: {
    margin: '1em 0'
  }
});

function newIssue(e) {
  e.preventDefault();
  window.open(
    'https://github.com/connectome-neuprint/neuPrintExplorer/issues/new?labels=user&body=(Please%20provide%20additional%20details)'
  );
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Loading user issues from GitHub...'
    };
<<<<<<< HEAD
  }
=======
  }

  componentDidMount() {
    const { token } = this.props;
    if (token === '') {
      return;
    }
    this.loadIssues();
  }

  componentDidUpdate(nextProps) {
    const { token } = this.props;
    if (nextProps.token === token) {
      return;
    }
    this.loadIssues();
  }

>>>>>>> Major refactoring to work with airbnb eslint
  loadIssues() {
    const { token } = this.props;
    /* Call to Google API function */
    fetch('https://us-east1-dvid-em.cloudfunctions.net/neuprint-janelia/gitinfo', {
      method: 'POST',
      headers: {
<<<<<<< HEAD
        Authorization: 'token ' + token,
=======
        Authorization: `token ${token}`,
>>>>>>> Major refactoring to work with airbnb eslint
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        organization: 'connectome-neuprint'
      })
    })
      .then(result => result.json())
      .then(result => {
<<<<<<< HEAD
        let fulllist = [];
        let repoedges = result.data.organization.repositories.edges;
        repoedges.forEach(function(repoedge) {
          let name = repoedge.node.name;
          let issuelist = [];
          let edges = repoedge.node.issues.edges;
          edges.forEach(function(issue) {
=======
        const issuelist = [];
        const repoedges = result.data.organization.repositories.edges;
        repoedges.forEach(repoedge => {
          const { edges } = repoedge.node.issues;
          edges.forEach(issue => {
>>>>>>> Major refactoring to work with airbnb eslint
            issuelist.push([issue.node.title, issue.node.url, issue.node.number, issue.node.body]);
          });
          if (issuelist.length > 0) {
            let listItems = issuelist.map(iss => (
              <li key={iss[2].toString() + iss[0]}>
                <Tooltip title={iss[3]} placement={'bottom'} enterDelay={100}>
                  <a
                    href={iss[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'darkblue' }}
                  >
                    {iss[0]}
                  </a>
                </Tooltip>
              </li>
            ));
            let listing = (
              <span key={name}>
                {name}
                <ul>{listItems}</ul>
              </span>
            );
            fulllist.push(listing);
          }
        });
<<<<<<< HEAD
        if (fulllist.length === 0) {
=======
        const listItems = issuelist.map(iss => (
          <li key={iss[2].toString() + iss[0]}>
            <Tooltip title={iss[3]} placement="bottom" enterDelay={100}>
              <a
                href={iss[1]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'darkblue' }}
              >
                {iss[0]}
              </a>
            </Tooltip>
          </li>
        ));
        if (issuelist.length === 0) {
>>>>>>> Major refactoring to work with airbnb eslint
          this.setState({
            data: 'No user issues found'
          });
        } else {
          this.setState({
<<<<<<< HEAD
            data: <span>{fulllist}</span>
          });
        }
      })
      .catch(function(error) {
        this.setState({
          data: error
        });
      });
  }

  componentDidMount() {
    const { token } = this.props;
    if (token === '') {
      return;
    }
    this.loadIssues();
  }
  componentDidUpdate(nextProps) {
    const { token } = this.props;
    if (nextProps.token === token) {
      return;
    }
    this.loadIssues();
  }
=======
            data: <ul>{listItems}</ul>
          });
        }
      })
      .catch(error => {
        this.setState({ data: error });
      });
  }
>>>>>>> Major refactoring to work with airbnb eslint

  render() {
    const { classes } = this.props;
    const { data } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h3" className={classes.centered}>
          neuPrint Explorer
        </Typography>
        <Typography variant="body1" className={classes.centered}>
          Version: {VERSION}
        </Typography>
        <Divider light className={classes.spaced} />
        <Typography variant="h6">About:</Typography>
        <Typography variant="body1" className={classes.spaced}>
          neuPrint Explorer is web based tool to query and visualize connectomic data stored in
          neuPrint, a neo4j graph database of the connectome.{' '}
        </Typography>

        <Typography variant="h6">Log an issue:</Typography>
        <Typography variant="body1" className={classes.spaced}>
          Note that you currently need to have a GitHub account to submit issues.
          <br />
          <Button variant="contained" color="primary" className={classes.button} onClick={newIssue}>
            New issue
          </Button>
        </Typography>

<<<<<<< HEAD
        <Typography variant="h6">Open issue list</Typography>
        {this.state.data}
=======
        <Typography variant="h6">Issue list</Typography>
        {data}
>>>>>>> Major refactoring to work with airbnb eslint

        <Typography variant="h6">Contact us:</Typography>
        <Typography variant="body1" className={classes.spaced}>
          <Icon>mail_outline</Icon>
          <a href="mailto:neuprint@janelia.hhmi.org">neuprint@janelia.hhmi.org</a>
        </Typography>
      </div>
    );
  }
}

<<<<<<< HEAD
var AboutState = function(state) {
  return {
    token: state.user.get('token')
  };
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string
=======
const AboutState = state => ({
  token: state.user.token
});

About.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired
>>>>>>> Major refactoring to work with airbnb eslint
};

export default withStyles(styles)(
  connect(
    AboutState,
    null
  )(About)
);

/* export default withStyles(styles)(About); */
