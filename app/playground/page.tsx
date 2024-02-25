export default function Test() {
    return (<div className="flex ">
        <div className="w-400 border border-black">
            First Element
        </div>
        <div className="border border-black">
            <div className="inline-block">
                Second Element
            </div>
        </div>
        <div className="flex-1 border border-black">
            Third Element
        </div>
    </div>)
}