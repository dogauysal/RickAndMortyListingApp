class UrlHelper {


    getResidentIds = (residentUrls: string[]) => {

        let ids: number[] = [];

        residentUrls.forEach(residentUrl => {
            let idArray = residentUrl.split("character/");

            let id = Number(idArray[1])

            ids.push(id)
        })

        return ids;
    }
}

export default new UrlHelper();