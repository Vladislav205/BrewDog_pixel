import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import style from './SearchFilters.module.css';

const SearchFilter = ({sortABV, sortABVdesc, sortName, sortNamedesc}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  return(

<div>
     <Button className={style.buttonfilter} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
       Filters
     </Button>
     <Menu
       id="fade-menu"
       anchorEl={anchorEl}
       keepMounted
       open={open}
       onClose={handleClose}
       TransitionComponent={Fade}
     >
       <MenuItem onClick={sortName}>Name: A - Z</MenuItem>
       <MenuItem onClick={sortNamedesc}>Name: Z - A</MenuItem>
       <MenuItem onClick={sortABV}>ABV: Low - High</MenuItem>
       <MenuItem onClick={sortABVdesc}>ABV: High - Low</MenuItem>
     </Menu>
    </div>
  )
}

export default SearchFilter;
