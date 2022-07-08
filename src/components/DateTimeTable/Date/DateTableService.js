// Install
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// User
import { selectByUId } from 'store/actions/WebsocketAction';
import SelectProductFrame from 'components/SelectTableProduct/Product';
import {
    HalfWidthFrame,
    ComponentFrame,
    CalendarFrame,
    CardFrame,
    ItemFrame,
    ListFrame,
    ContentFrame,
    CustomButton,
    SubContentFrame,
    AllContentFrame
} from './DateTableStyle';

const DateTableCalendar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(new Date());
    const [dateTime, setDateTime] = useState();
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setDisable(false);
    }, []);
    useEffect(() => {
        setDateTime(moment(value).format('YYYYMMDD'));
    }, [value]);
    return (
        <CalendarFrame>
            <ContentFrame>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        disabled={disable}
                        displayStaticWrapperAs="desktop"
                        openTo="day"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                </LocalizationProvider>
                <SubContentFrame>
                    <CustomButton
                        onClick={() => {
                            setDisable(true);
                            dispatch(selectByUId(dateTime));
                        }}
                        disabled={disable}
                    >
                        확인
                    </CustomButton>
                    <CustomButton
                        onClick={() => {
                            setDisable(false);
                        }}
                    >
                        재입력
                    </CustomButton>
                </SubContentFrame>
            </ContentFrame>
        </CalendarFrame>
    );
};

const DateTable = () => {
    return (
        <AllContentFrame>
            <SelectProductFrame />
            <DateTableCalendar />
        </AllContentFrame>
    );
};

const DateTableService = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    return <>{loading ? <></> : <DateTable />}</>;
};

export const DateTableFrame = () => {
    return (
        <HalfWidthFrame height={650}>
            <ComponentFrame height={650}>
                <DateTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
