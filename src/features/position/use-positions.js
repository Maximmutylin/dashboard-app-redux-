import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectAllVisible, addPosition } from "./position-slice";
import { selectFilters } from "features/filters/filter-slice";
import data from "../../mock/data.json"

export const usePosition = () => {
    const dispatch = useDispatch();

    const currentFilters = useSelector(selectFilters)
    const positions = useSelector(state => selectAllVisible(state, currentFilters));

    useEffect(() => {
        dispatch(addPosition(data))
    }, [dispatch]);

    return positions
}