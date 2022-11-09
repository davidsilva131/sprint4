import { Container } from "@mui/system";
import React from "react";
import SearchInput from "./SearchInput";
import './Search.scss'
import BackSearch from '@mui/icons-material/SettingsBackupRestoreTwoTone';

const Search = () => {

    const handleClickSearch = (text) => {
        console.log('da click a busqueda reciente')
    }
    return (
        <Container>
            <div className="search">
                <SearchInput />
                <div className="search__recent">
                    <span className="search__recent__tittle">Recent Searches</span>
                    <span onClick={() => { handleClickSearch('text') }} className="search__recent__search">
                        <BackSearch />
                        Pizza
                    </span>
                    <span className="search__recent__search">
                        <BackSearch />
                        Pizza
                    </span>
                    <span className="search__recent__search">
                        <BackSearch />
                        Pizza
                    </span>
                </div>
                <section className="search__container">

                </section>
            </div>
        </Container>
    )
};

export default Search;
