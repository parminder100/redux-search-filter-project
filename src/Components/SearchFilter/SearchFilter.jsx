import {useDispatch, useSelector} from "react-redux";
import { SetSearchFilter} from "../Store/Store";
import { UserData } from "../UserData/UserData";
import { useEffect } from "react";

const SearchFilter = () =>{
    const dispatch = useDispatch();
    const searchFilter = useSelector((state) => state.searchFilter);

    useEffect(()=>{
        dispatch({type: "FETCH_USERS", users: UserData});
    },[dispatch])

    const handleSearch = (e) =>{
        dispatch(SetSearchFilter(e.target.value));
    }

    const applyFilter = () => {
        return UserData.filter((user) =>
          user.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
    };
    return(
        <>
            <input type="text" onChange={handleSearch} />
            <ul>
                {
                    applyFilter().map((user)=>(
                        <>
                            <li key={user.id}>{user.name}</li>
                        </>
                    ))
                }
            </ul>
        </>
    )
}
export default SearchFilter;