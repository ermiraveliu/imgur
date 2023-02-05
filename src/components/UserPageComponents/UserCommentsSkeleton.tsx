export interface UserCommentsSkeletonProps {
    image_url: string;
    caption: string;
    points: number;
}

const UserCommentsSkeleton: React.FC<UserCommentsSkeletonProps> = ({image_url, caption, points}) => {
    return (  
        <div className="comment-container">
            <div className="comment-img">
                <img src={image_url} alt=""/>
                </div>
                <div className="comment">
                <div className="comment-text">
                    <p className="text-white">${caption}</p>
                </div>
                <div className="comment-items">
                    <div className="comment-details">
                    <div className="flex align-center">
                        <div className="comment-vote"></div>
                        <p>${points}</p>
                    </div>
                    
                    <p>3 days</p>
                    <button className="text-white">Reply</button>
                    </div>
                    <div className="comment-dropdown"><p></p></div>
                </div>
            </div>
        </div>
     );
}
 
export default UserCommentsSkeleton;