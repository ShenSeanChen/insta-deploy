import React, { useRef, useState, useEffect } from 'react'
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
    DotsHorizontalIcon,
    ChatIcon,
    BookmarkAltIcon,
    EmojiHappyIcon
  } from '@heroicons/react/outline';

import {HomeIcon, HeartIcon as HeartIconFilled} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
// ellipsis-horizontal
import {db, storage} from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, onSnapshot, orderBy, query, setDoc, deleteDoc } from 'firebase/firestore';
import {ref, getDownloadURL, uploadString, loading, setLoading} from "@firebase/storage";
import Moment from "react-moment"

// function Post(props) {
function Post({ id, username, userImg, img, caption}) {
  const {data: session} = useSession();

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
//   const commentRef = useRef(null);

  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState([]);


//   console.log('post user profile img: ', userImg)
//   console.log('post user profile img trimmed: ', userImg)

  // Update Comments
  useEffect(
    () => 
    onSnapshot(
        query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), 
        snapshot => setComments(snapshot.docs)
        ), [db, id])

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
        comment: commentToSend,
        username: session.user.username,
        userImage: session.user.image,
        timestamp: serverTimestamp(),
    })
  }

//   console.log('recording comments!!!')
//   console.log(comments)
//   console.log(comments.length)


//   Update likes and more! --> set likes as latest snapshot.docs 
  useEffect(() => onSnapshot(
    collection(db, 'posts', id, 'likes'), 
    (snapshot) => setLikes(snapshot.docs)
    ), [db, id])

  const likePost = async () => {
    if (hasLiked) { // delete the unique user id if disliked it
        await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
        await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), { 
            // using user's id: session.user.uid to keep likes to be unique for each user
            username: session.user.username,
            timestamp: serverTimestamp(),
        })
    }
  }
//   console.log('likes: ', likes)

  // Upldate likes --> check unique user id and set hasLiked
  useEffect(() => {
    setHasLiked(likes.findIndex(like => (like.id === session?.user?.uid)) !== -1 )
  }, [likes])

//   console.log('hasLiked', hasLiked)

  // count likes
  useEffect(
    () => 
    onSnapshot(
        query(collection(db, 'posts', id, 'likes'), orderBy('timestamp', 'desc')), 
        snapshot => setLikesCount(snapshot.docs)
        ), [db, id])
//   console.log('likes Count: ', likesCount)
//   console.log('likes Count: ', likesCount.map((count) => count.data().username))

//   console.log('userImg: ', userImg)

  return (
    <div className="bg-white my-7 border  rounded-lg">

        {/* Header */}
        <div className="flex items-center p-2">
            <img src={userImg} alt="" 
                className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
            />
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5 mr-2" />
        </div>

        {/* Image */}
        <img src={img} 
            className="object-cover w-full h-full"
        alt=""/>
            
        {/* Buttons */}
        {session && (
            <div className="flex justify-between items-center mt-2 mb-1 px-2">
                <div className="flex space-x-4  ">
                    <HeartIcon onClick={likePost} className={`btn ${hasLiked && "btn fill-red-300"}`} />
                    {/* {likes[0]}  */}
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn"/>
                </div>
                <BookmarkAltIcon className='btn mr-2'/>
            </div>
        )}
        
        {/* Likes */}
        <div>
            {session && (
                <p className='px-3 pt-1 truncate'>
                    <span className="font-bold"> {hasLiked ? "I Love it!" : "Nah, not so good."} </span>    
                </p>
            )}
            
            

            {likes.length > 0 && (
                <p className='px-3 pt-2 truncate text-gray-500 text-sm'>
                <span>{likesCount.length} likes, by {likesCount.map(unique_like => unique_like.data().username).join(", ")}</span>
                </p>
            )}
            
            
        </div>


        {/* Caption */}
        <div>
            <p className='px-3 py-1 truncate'>
                <span className="font-bold">@{username} </span>
                {caption}
            </p>
        </div>

{/* 
        {<main 
            className={`grid grid-cols-2
            
            md:grid-cols-2 md:max-w-2xl 
            xl:grid-cols-3 xl:max-w-3xl mx-auto 
            px-10
            ${!session && "!grid-cols-1 !max-w-2xl"}`}
        >
        
            {/* Section on the Left */}
            {/* <section className="col-span-1">
                <Posts />
            </section>
                
            {/* Section on the Right */}
            {/* {session && (
            <section className='hidden xl:inline-grid md:col-span-1'>
                <div className='fixed top-20'>
                    <MiniProfile />
                </div>
            </section>
            )}
        // </main> }


        {/* Comments */}
        {comments.length > 0 && (
            <div className='pb-2 pl-2 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>

                {comments.map(comment => (
                    // <main className='grid-cols-2'>
                        <div key={comment.id} className=''>
                            {comment.data().comment.trim().length>0 && (
                 
                                    <div 
                                        className='flex space-x-2 pl-2 py-1 justify-center'>
                                        <img src={comment.data().userImage} 
                                            alt="" 
                                            className='w-5 h-5 rounded-full'/>
                                        <p className='text-sm flex-1'>
                                            <span className="font-bold text-sm">{comment.data().username}</span>
                                            {"  "}{comment.data().comment} 
                                            {/* <text className='text-xs text-gray-400 pl-2'>{comment.data()?.timestamp?.toDate().toISOString().split('T')[0]}</text> */}
                                        </p>
                                        <Moment fromNow className='pr-5 text-xs text-gray-400'>
                                            {comment.data().timestamp?.toDate()}
                                        </Moment>
                                    </div>
                      
                                

                            )}
                        </div>

                    // </main>
                    
                ))}

            </div>
        )}

        

        {/* Input Box  */}
        {session && (
            <div className='px-2'>
                <form className='flex items-center mb-2 mr-4'>
                    <EmojiHappyIcon className='btn'/>
                    <input 
                        type="text" 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Add a Comment..." 
                        // ref={commentRef}
                        className='border-none flex-1 focus:ring-0 outline-none' />
                    <button 
                        type='submit'
                        onClick={sendComment}
                        disabled={comment.trim().length == 0 ? true : false}
                        className={`font-semibold text-blue-500 
                        ${comment.trim().length ==0 && "text-blue-200"}`}
                    >
                        Post
                    </button>
                </form>
            </div>
        )}

        
        



        

        
      
    </div>
  )
}

export default Post
