// Name:getDevice
// Params: userAgent:String
// Desc: Returns the type of device depending on the user agent.
export const getDevice = (userAgent) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent)) {
        return "Mobile";
    } else {
        return "Desktop";
    }
}
// Name:trimText
// Params: str:String, limit:int
// Desc: Returns a trimmed text by the number specifed on limit.
export const trimText = (str, limit) => {
    return str.length >= limit ? str.substr(0, limit) + '...' : str;
}

// Name:sortItemsBy
// Params: items:array_of_objects, field:any
// Desc: Returns items order by a certain field.

export const sortItemsBy = (items, field) => {

    let sortedItems = items.sort((itemA, itemB) => {
        return itemA[field] - itemB[field] ;
    });

    return sortedItems;

}