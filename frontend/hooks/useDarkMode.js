import React, {useState, useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage.js";

export const useDarkMode = (key, initialValue) => {
    const [darkOn, setDarkOn] = useLocalStorage(key, initialValue);
    return [darkOn, setDarkOn];
}