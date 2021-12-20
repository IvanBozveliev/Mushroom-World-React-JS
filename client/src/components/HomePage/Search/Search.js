import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Search.css';


const Search = ({
    placeholder,
    typeDetails,
    products
}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) =>{
        
        const searchWord = e.target.value;
        setWordEntered(searchWord);

        const newFilter = products.filter(x => x.title.toLowerCase().includes(searchWord.toLowerCase()))
        
        searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter)
        
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    }

    return (
        <div className='search'>
            <div className="searchInputs">
                {/* MAIN INPUT */}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />

                <div className='searchIcon' >
                    {filteredData.length === 0 ?
                      <img className='searchIcon' src="/images/search.png"/>
                      :
                      <img className="clearBtn" onClick={clearInput} src="/images/x.png"/>
                    }
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map(x => 
                        <NavLink key={x._id} className="dataItem" to={`/${typeDetails}/details/${x._id}`} >
                            <h5 className='dataItemP'>{x.title}</h5>
                        </NavLink>
                    )}
                </div>
            )}
        </div>
    )
}


export default Search;