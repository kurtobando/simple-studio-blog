export default class Pagination {
    private _data: any[] = []
    private _pageCurrent: number = 1
    private _pagePer: number = 5
    private _pageTotal: number = 0
    private _arrayStart: number = 0
    private _arrayEnd: number = 0
    private _arrayPageData: any[] = []

    set pageData(arr: any[]) {
        this._data = arr
    }

    get pageData() {
        return this._arrayPageData
    }

    set pagePer(n: number) {
        this._pagePer = n
    }

    set pageCurrent(n: number) {
        this._pageCurrent = n
    }

    get pageTotal() {
        return this._pageTotal
    }

    exec() {
        // get total of pages
        this._pageTotal = Math.ceil(this._data.length / this._pagePer)

        // ensure current page will not overboard to the total number of pages
        if (this._pageCurrent > this._pageTotal) {
            this._pageCurrent = 1
            this._arrayStart = 0
            this._arrayEnd = this._pageTotal - 1
        }

        // prepare array start, and end
        if (this._pageCurrent <= this._pageTotal) {
            this._arrayStart = (this._pageCurrent - 1) * this._pagePer
            this._arrayEnd = this._pageCurrent * this._pagePer - 1
        }

        // filter page data, based on the array start, and end
        this._arrayPageData = this._data.filter((data, index) => {
            if (index >= this._arrayStart && index <= this._arrayEnd) {
                return data
            }
        })
    }
}
