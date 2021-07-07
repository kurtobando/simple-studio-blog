interface Props {
    pageCurrent: number
    pageTotal: number
    onClick: any
}

export default function PaginationLinkNext({ pageCurrent, pageTotal, onClick }: Props): JSX.Element {
    if (pageCurrent >= pageTotal) {
        return (
            <div>
                <div className="p-2 border-white border-2 ">
                    <a className="block cursor-not-allowed text-main text-opacity-50">Next</a>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="p-2 border-white border-2">
                <a className="block cursor-pointer" onClick={() => onClick(pageCurrent + 1)}>
                    Next
                </a>
            </div>
        </div>
    )
}
