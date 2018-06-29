import axios from 'axios';
import qs from 'qs';
import { OHWS } from '../constants';

export default async (data) => {
    return await axios.post(OHWS.InsertEnterprise_Selected, qs.stringify({
        Name: data,
        Enterprise_Stored_ID: 1
    }))
}
