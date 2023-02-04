interface Props {
    
}
 
const NewPostButton: React.FC<Props> = () => {
    return (
        <button
        className="btn flex sm:flex new-post items-center gap-x-2 w-auto py-2  sm:mb-0 sm:py-1 px-4 bg-btnColor-1 hover:bg-btnColor-2 rounded-sm text-white font-medium relative"
      >
        <img
            alt = "plus"
            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"
                className="lg:relative "
        />
        <p className="inline-block sm:hidden md:inline-block text-sm font-semibold">New post</p>
        </button>
    );
}
 
export default NewPostButton;