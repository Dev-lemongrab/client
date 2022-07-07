export const SELECTED_CHANGE_SAVE = 'SELECTED_CHANGE_SAVE';
export const SELECTED_CHANGE_SAVE2 = 'SELECTED_CHANGE_SAVE2';
export const ITEM_CHANGE_SAVE = 'ITEM_CHANGE_SAVE';
export const LIST_ITEM_ROOM_DELETE = 'LIST_ITEM_ROOM_DELETE';
export const LIST_ITEM_VEHICLE_DELETE = 'LIST_ITEM_VEHICLE_DELETE';

export const SelectedChangeSave = (selected) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SELECTED_CHANGE_SAVE,
                selected: selected
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const Selected2ChangeSave = (selected2) => {
    return async (dispatch) => {
        try {
            console.log(selected2);
            dispatch({
                type: SELECTED_CHANGE_SAVE2,
                selected2: selected2.value
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const ItemChangeSave = (item) => {
    return async (dispatch) => {
        try {
            console.log(item);
            dispatch({
                type: ITEM_CHANGE_SAVE,
                item: item
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const RoomItemDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LIST_ITEM_ROOM_DELETE,
                deleteId: id
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const VehicleItemDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LIST_ITEM_VEHICLE_DELETE,
                deleteId: id
            });
        } catch (err) {
            console.log(err);
        }
    };
};
