import { InputAdornment } from "@mui/material";
import React from "react";
import { StyledSearchIcon, StyledSearchInput } from "../styledComponents/MaterialComponents";

const SearchInput = () => {
    return (
        <StyledSearchInput
            fullWidth
            id="filled-search"
            placeholder="Search for a dish"
            type="search"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <StyledSearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    )
};

export default SearchInput;
