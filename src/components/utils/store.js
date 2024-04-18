import {configureStore} from '@reduxjs/toolkit';

import appSlice from './appSlice';
import TagSllice from './TagSllice';

const store = configureStore({
    reducer:{
        app:appSlice,
        tags: TagSllice,
        devTools: true // Enable Redux DevTools
    },

});

export default store;