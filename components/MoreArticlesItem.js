export default function MoreArticlesItem(props) {
  return (
    <>
      <div id="moreArticlesItem" className="mb-8">
        <div className="flex flex-row flex-nowrap justify-start align-stretch">
          <div className="flex-auto">
            <div className="flex flex-row flex-nowrap justify-start align-stretch mb-1">
              <a href="#"><img className="rounded-full w-[24px] mr-2" src={props.authorImg} alt={props.name} /></a>
              <span className="text-gray-400 text-sm">{props.name}</span>
            </div>
            <div className="text-gray-600 font-bold text-sm">
              <a href="#">{props.title}</a>
            </div>
          </div>
          <div className="flex-none w-[55px]">
            <a href="#"><img className="rounded-sm w-[55px] h-[55px] ml-2" src={props.articleImg} alt={props.title} /></a>
          </div>
        </div>
      </div>
    </>
  )
}