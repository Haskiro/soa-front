import * as React from 'react';
import Popover from '@mui/material/Popover';
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import {FormGroup, FormLabel, MenuItem, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {filtersSelector} from "../store/slices/Persons/Persons.selectors";
import {filterOperationTypes} from "../store/slices/Persons/Persons.helpers";

const FiltersPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const filters = useSelector(filtersSelector);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'filters-popover' : undefined;

  const handleFilterValueChange = (event) => {
    console.log(event.target.value);
  }

  const handleFilterOperationChange = (event) => {
    console.log(event.target.name)
  }

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <FilterListIcon/>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box
          component="form"
          sx={{
            p: 1,
            '& .MuiInputBase-input': {
              width: '25ch'
            },
            '& .MuiTextField-root': {
              m: 1,
            }
          }}
          noValidate
          autoComplete="off"
        >
          <FormLabel sx={{
            fontWeight: '600'
          }}>Filters</FormLabel>
          <div>
            <Box display='flex'>
              <TextField
                select
                value={filters.id.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='id'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="ID"
                value={filters.id.searchStr}
                name='id'
                shrink
                onChange={handleFilterValueChange}
                inputProps={{type: 'number'}}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.name.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='name'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Name"
                value={filters.name.searchStr}
                name='name'
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleFilterValueChange}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.creationDate.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='creationDate'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Creation Date"
                name='creationDate'
                type='date'
                value={filters.creationDate.searchStr}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleFilterValueChange}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.height.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='height'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Height"
                value={filters.height.searchStr}
                name='height'
                shrink
                onChange={handleFilterValueChange}
                inputProps={{type: 'number'}}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.weight.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='weight'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Weight"
                value={filters.weight.searchStr}
                name='weight'
                shrink
                onChange={handleFilterValueChange}
                inputProps={{type: 'number'}}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.birthday.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='birthday'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Birthday"
                name='birthday'
                type='date'
                value={filters.birthday.searchStr}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleFilterValueChange}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.nationality.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='nationality'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Nationality"
                value={filters.nationality.searchStr}
                name='nationality'
                shrink
                onChange={handleFilterValueChange}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </Box>
            <Box display='flex'>
              <TextField
                select
                value={filters.hairColor.operation}
                size='small'
                sx={{
                  width: '70px'
                }}
                name='hairColor'
                onChange={handleFilterOperationChange}
              >
                {filterOperationTypes.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Hair Color"
                value={filters.hairColor.searchStr}
                name='hairColor'
                shrink
                onChange={handleFilterValueChange}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </Box>
            <FormGroup>
              <FormLabel sx={{fontSize: '14px'}}>Coordinates</FormLabel>
              <Box display='flex'>
                <TextField
                  select
                  value={filters['coordinates.x'].operation}
                  size='small'
                  sx={{
                    width: '70px'
                  }}
                  name='coordinates.x'
                  onChange={handleFilterOperationChange}
                >
                  {filterOperationTypes.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="X"
                  value={filters['coordinates.x'].searchStr}
                  name='coordinates.x'
                  shrink
                  onChange={handleFilterValueChange}
                  inputProps={{type: 'number'}}
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                />
              </Box>
              <Box display='flex'>
                <TextField
                  select
                  value={filters['coordinates.y'].operation}
                  size='small'
                  sx={{
                    width: '70px'
                  }}
                  name='coordinates.y'
                  onChange={handleFilterOperationChange}
                >
                  {filterOperationTypes.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Y"
                  value={filters['coordinates.y'].searchStr}
                  name='coordinates.y'
                  shrink
                  onChange={handleFilterValueChange}
                  inputProps={{type: 'number'}}
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                />
              </Box>
            </FormGroup>
            <FormGroup>
              <FormLabel sx={{fontSize: '14px'}}>Location</FormLabel>
              <Box display='flex'>
                <TextField
                  select
                  value={filters['location.x'].operation}
                  size='small'
                  sx={{
                    width: '70px'
                  }}
                  name='location.x'
                  onChange={handleFilterOperationChange}
                >
                  {filterOperationTypes.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="X"
                  value={filters['location.x'].searchStr}
                  name='location.x'
                  shrink
                  onChange={handleFilterValueChange}
                  inputProps={{type: 'number'}}
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                />
              </Box>
              <Box display='flex'>
                <TextField
                  select
                  value={filters['location.y'].operation}
                  size='small'
                  sx={{
                    width: '70px'
                  }}
                  name='location.y'
                  onChange={handleFilterOperationChange}
                >
                  {filterOperationTypes.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Y"
                  value={filters['location.y'].searchStr}
                  name='location.y'
                  shrink
                  onChange={handleFilterValueChange}
                  inputProps={{type: 'number'}}
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                />
              </Box>
              <Box display='flex'>
                <TextField
                  select
                  value={filters['location.name'].operation}
                  size='small'
                  sx={{
                    width: '70px'
                  }}
                  name='location.name'
                  onChange={handleFilterOperationChange}
                >
                  {filterOperationTypes.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Name"
                  value={filters['location.name'].searchStr}
                  name='location.Name'
                  shrink
                  onChange={handleFilterValueChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  size='small'
                />
              </Box>
            </FormGroup>
          </div>
        </Box>
      </Popover>
    </div>
  );
}

export default FiltersPopover;