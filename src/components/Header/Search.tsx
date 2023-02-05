interface Props {
  inGalleryPage:boolean,
  isVisible:boolean
}
 
const Search: React.FC<Props> = ({isVisible, inGalleryPage}) => {
    return ( 
      <form className="search-form flex-col h-10 overflow-visible items-center sm:w-5/6 md:w-1/3 relative z-10"
        style={{
          display: isVisible && inGalleryPage ? `none` : `flex`
        }}>
        <div className="flex h-10 items-center w-full relative z-10">
          <input
            type="search"
            placeholder="Images, #tags, @users oh my!"
            className="w-full h-full px-2  bg-searchBar text-white placeholder-inputTextColor rounded-sm"
          />
          <button
            type="submit"
            className="text-white h-full px-2 flex items-center absolute right-0"
          >
            <span className="material-symbols-outlined"> search </span>
          </button>
          </div>
          <div className="autocomplete-box hidden flex-col items-center absolute top-12 w-full h-auto py-4 gap-4 bg-gray-800 text-white placeholder-inputTextColor rounded-sm">
            <h3 className="postsLabel font-semibold self-start pl-4">Posts</h3>
            <ul className="posts flex flex-col gap-2 px-4 w-full">
            </ul>
            <h3 className="tagsLabel font-semibold self-start pl-4">Tags</h3>
            <ul className="tags flex flex-col gap-2 px-4 w-full">
            </ul>
            <h3 className="usersLabel font-semibold self-start pl-4">Users</h3>
            <ul className="users flex flex-col gap-2 px-4 w-full">
            </ul>
          </div>
        </form>

     );
}
 
export default Search;