import PaginationLinkPrev from "./PaginationLinkPrev"
import PaginationLinkNext from "./PaginationLinkNext"

interface PaginationLinkProps {
    pageTotal: number
    pageCurrent: number
    pageLinkTotal?: number
    onClick: any
}

export default function PaginationLink(props: PaginationLinkProps): JSX.Element {
    const { pageTotal, pageCurrent, pageLinkTotal = 5, onClick } = props

    if (pageLinkTotal < 5) {
        throw new Error("pageLinkTotal props should be higher than or equal to 5")
    }

    const createArrayFromTotalPage: number[] = Array.from({ length: pageTotal }, (_, i) => i + 1)
    const pageLinkBetween: number = Math.ceil(pageLinkTotal / 2)
    const pageStart: number = getPageStart()
    const pageEnd: number = getPageEnd()

    function getPageStart(): number {
        return Math.max(0, pageCurrent - pageLinkBetween)
    }

    function getPageEnd(): number {
        if (pageCurrent <= 1) {
            return pageCurrent + pageLinkBetween
        }
        if (pageCurrent <= 2) {
            return pageCurrent + pageLinkBetween - 1
        }
        return pageCurrent + pageLinkBetween - 2
    }

    return (
        <div className="flex flex-row flex-wrap">
            <PaginationLinkPrev pageCurrent={pageCurrent} onClick={onClick} />

            {createArrayFromTotalPage
                .map((value) => {
                    if (value === pageCurrent) {
                        return (
                            <div key={value}>
                                <a
                                    className="block border-b-2 border-highlight font-bold text-highlight p-2 m-1 cursor-pointer"
                                    onClick={() => onClick(value)}>
                                    {value}
                                </a>
                            </div>
                        )
                    }

                    return (
                        <div key={value}>
                            <a className="block  border-white  p-2 m-1 cursor-pointer" onClick={() => onClick(value)}>
                                {value}
                            </a>
                        </div>
                    )
                })
                .filter((value, index) => {
                    if (index >= pageStart && index <= pageEnd) {
                        return value
                    }
                })}

            <PaginationLinkNext pageCurrent={pageCurrent} pageTotal={pageTotal} onClick={onClick} />
        </div>
    )
}
