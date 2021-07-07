interface Props {
    pageCurrent: number
    onClick: any
}

export default function PaginationLinkPrev({ pageCurrent, onClick }: Props): JSX.Element {
    if (pageCurrent <= 1) {
        return (
            <div>
                <div className="p-2 border-white border-2 ">
                    <a className="block cursor-not-allowed text-main text-opacity-50">Prev</a>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="p-2 border-white border-2">
                <a className="block cursor-pointer" onClick={() => onClick(Math.max(0, pageCurrent - 1))}>
                    Prev
                </a>
            </div>
        </div>
    )
}
