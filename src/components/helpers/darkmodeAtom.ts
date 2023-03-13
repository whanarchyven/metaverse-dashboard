import {atom} from "recoil";

const darkMode=atom({
    key:'darkMode',
    default:{
        isDark:true,
    }
})

export default darkMode