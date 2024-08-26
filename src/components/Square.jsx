
function Square({ value, onSquareClick }) {
    return (
        <button className="border border-black w-[90px] h-[90px] font-bold mt-[-1px] mr-[-1px] text-3xl"
            onClick={onSquareClick}>
            {value === null ? '_' : value}
        </button>
    )
}

export default Square
