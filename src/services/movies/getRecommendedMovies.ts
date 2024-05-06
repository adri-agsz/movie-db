import httpInstance from '../httpInstance';

export const getRecommended = async(id: String) => {
    let res: any;
    const endpoint = `${id}/recommendations?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint)
    .then((data) => {
        res = data;
    }).catch((err) => {
        res = err.response;
    });
    return res;
}
