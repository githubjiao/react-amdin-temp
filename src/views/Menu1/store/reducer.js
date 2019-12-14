/**
 * Menu1-reducer
 */
import { type } from './constantsType';

let initData = {
    menu1Data: {}
}
let menu1State = (state = initData, action) => {
    switch (action.type) {
        case type.MENU1_DATA:
			return {
				...state,
				menu1Data: Object.assign({}, state.menu1Data, action.menu1Data)
			};
        default:
            return state;
    }
};

export default menu1State;