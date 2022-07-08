import dshareAPI from '../components/ApiModules/index';

export const selectByRoomDateCalendar = async () => {
    return await dshareAPI('emp/room/reservation/all');
};
export const selectByVehicleDateCalendar = async () => {
    return await dshareAPI('emp/vehicle/list/reservation');
};
export const selectByVehicleNonReservation = async () => {
    return await dshareAPI('emp/vehicle/list/stock');
};
export const findAllByVehicle = async () => {
    return await dshareAPI('emp/vehicle/list/vehicle/all');
};
export const findAllByRoom = async () => {
    return await dshareAPI('emp/room/list/meeting/room/all');
};
export const selectByEmpNoAPI = async () => {
    return await dshareAPI('emp/ws/validation');
};
export const makeRoomReservationAPI = async (data) => {
    return await dshareAPI
        .post('emp/room/regist', {
            roomId: data.rid,
            reason: data.reason,
            title: data.title,
            startedAt: data.startedAt,
            endedAt: data.endedAt
        })
        .catch((error) => console.log(error));
};
export const makeVehicleReservationAPI = async (data) => {
    return await dshareAPI
        .post('emp/vehicle/creation/reservation', {
            vehicleId: data.vid,
            reason: data.reason,
            title: data.title,
            startedAt: data.startedAt,
            endedAt: data.endedAt
        })
        .catch((error) => console.log(error));
};
export const modifyRoomReservationAPI = async (data) => {
    return await dshareAPI
        .put(`emp/room/my/update/${data.id}`, {
            roomId: data.rid,
            empId: data.empid,
            reason: data.reason,
            title: data.title,
            startedAt: data.startedAt,
            endedAt: data.endedAt
        })
        .catch((error) => console.log(error));
};
export const modifyVehicleReservationAPI = async (data) => {
    return await dshareAPI
        .patch('emp/vehicle/modification', {
            id: data.id,
            vehicleId: data.vid,
            reason: data.reason,
            title: data.title,
            startedAt: data.startedAt,
            endedAt: data.endedAt
        })
        .catch((error) => console.log(error));
};
export const selectCompleteRoomReservationAPI = async () => {
    return await dshareAPI('emp/room/reservation/my/0/1', {})
        .then((res) => res.data)
        .catch((error) => console.log(error));
};
export const selectCompleteVehicleReservationAPI = async () => {
    return await dshareAPI('emp/vehicle/list/own/paging', { params: { id: 0 } })
        .then((res) => res.data)
        .catch((error) => console.log(error));
};
