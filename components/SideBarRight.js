
import MoreArticles from '@components/MoreArticles'

export default function SideBarRight() {
  return (
    <>
      <div className="sticky top-0 flex-auto max-w-[350px] min-w-[250px] h-screen p-5 border-l border-gray-200 hidden lg:block">
        <div id="getStartedBtn" className="flex flex-row flex-nowrap justify-center align-center mb-8">
          <div className="flex-auto basis-1/3">
            <button className="rounded-full bg-zinc-900 text-zinc-50 p-2 w-full">Get started</button>
          </div>
          <div className="flex-auto">
            <a className="inline-block text-green-600 ml-4 mt-2" href="#">Sign In</a>
          </div>
        </div>
        <div id="searchField" className="mb-8">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="rgba(8, 8, 8, 1)"><path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path></svg>
          </span>
          <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        </div>
        <div id="authorDetails" className="mb-8">
          <div className="flex-none w-[75px] mb-3">
            <img className="rounded-full" src="james-t.jpeg" alt="James Tombs" />
          </div>
          <div className="text-gray-400">
            <div className="text-gray-600">James Tombs</div>
            <div className="text-sm">150k Followers <br/><br/>Thought provoking code daily. Guaranteed.</div>
            <div className="flex flex-row flex-nowrap justify-start align-stretch mt-5">
              <button className="rounded-full bg-green-600 text-zinc-50 text-zinc-50 py-2 px-5 mr-3">Follow</button> <button className="rounded-full bg-green-600 text-zinc-50 text-zinc-50"><svg className="stroke-zinc-50 fill-green-600" width="38" height="38" viewBox="0 0 38 38" ><rect x="26.25" y="9.25" width="0.5" height="6.5" rx="0.25"></rect><rect x="29.75" y="12.25" width="0.5" height="6.5" rx="0.25" transform="rotate(90 29.75 12.25)"></rect><path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"></path><path d="M11.5 14.5L19 20l4-3"></path></svg></button>
            </div>
          </div>
        </div>
        <MoreArticles />
      </div>
    </>
  )
}