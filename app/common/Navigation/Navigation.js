// NPM
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { connect } from 'react-redux'

// App
import { link, navTitle} from './styles.css'
import StyledButton from 'appCommon/StyledButton'

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'var(--color-inverted-light)',
    color: 'var(--color-grey)'
  },
  flex: {
    flex: 1,
  }
};

class Navigation extends React.Component {
  state = {
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderNavLinksAuthentication = () => {
    if (this.props.user.id) {
      return (
        <div>
          <MenuItem onClick={this.handleClose}>
            <a className={link} href='/accounts/logout'>{'Logout'}</a>
          </MenuItem>
        </div>
      )
    } else {
      return (
        <div>
          <MenuItem onClick={this.handleClose}>
            <a className={link} href='/accounts/login'>{'Login'}</a>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <a className={link} href='/accounts/signup'>{'Register'}</a>
          </MenuItem>
        </div>
      )
    }
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <a href='/' className={classes.flex} style={{textDecoration: 'none'}}>
              <h1 className={navTitle}>
                Women & Color
              </h1>
            </a>
            {
              this.props.user.id ? <StyledButton href="/accounts/logout">Log out</StyledButton> : <StyledButton href="/accounts/signup">Be a speaker</StyledButton>
            }
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  <a className={link} href='/#/about'>{'About'}</a>
                </MenuItem>
                { this.renderNavLinksAuthentication() }
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile
  }
}

export default connect(
  mapStateToProps
)(withStyles(styles)(Navigation));
