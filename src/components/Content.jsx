import { useState } from "react";

function Content(){

const [contents, setContents] = useState([
    {
      thumbnail: "https://picsum.photos/200",
      title: "hello world",
      avatar: "https://picsum.photos/200",
      name: "hello world",
      date: "01/01/2000"
    },
    {
      thumbnail: "https://picsum.photos/200",
      title: "hello world",
      avatar: "https://picsum.photos/200",
      name: "hello world",
      date: "01/01/2000"
    },
    {
      thumbnail: "https://picsum.photos/200",
      title: "hello world",
      avatar: "https://picsum.photos/200",
      name: "hello world",
      date: "01/01/2000"
    },
    {
      thumbnail: "https://picsum.photos/200",
      title: "hello world",
      avatar: "https://picsum.photos/200",
      name: "hello world",
      date: "01/01/2000"
    },
    {
      thumbnail: "https://picsum.photos/200",
      title: "hello world",
      avatar: "https://picsum.photos/200",
      name: "hello world",
      date: "01/01/2000"
    },
    {
      thumbnail: "https://picsum.photos/200",
      title: "hello world",
      avatar: "https://picsum.photos/200",
      name: "hello world",
      date: "01/01/2000"
    }
  ]);
  const [sidebarContents, setSidebarContents] = useState([
    {
      icon: "https://img.icons8.com/?size=100&id=83326&format=png&color=FFFFFF",
      text: "Home"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=82788&format=png&color=FFFFFF",
      text: "Liked"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=86327&format=png&color=FFFFFF",
      text: "Downloads"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=111348&format=png&color=FFFFFF",
      text: "Clips"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=23030&format=png&color=FFFFFF",
      text: "Playlist"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=124029&format=png&color=FFFFFF",
      text: "Later"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=FFFFFF",
      text: "Profile"
    },
    {
      icon: "https://img.icons8.com/?size=100&id=nJRLlq8KqcX5&format=png&color=FFFFFF",
      text: "Notifications"
    },

  ])


return(
    <>
    <div className='userinteraction-container'>
          <div className='sidebar-container' id="sidebar-container">
              {sidebarContents.map((sidebarContent, index) => (
                <div className='sidebar-item' key={index}>
                  <img className='sidebar-icon' src={sidebarContent.icon}/>
                  <div className='sidebar-text'>{sidebarContent.text}</div>
                </div>
              ))}
          </div>
          <div className='content-container' id="content-container">
            {contents.map((content, index) => (
              
                <div className='content-card' key={index} onClick={() => handleContentClick()}>
                  <div className='content-hover'></div>
                  <img className='content-thumbnail' src={content.thumbnail}/>
                  <div className='content-title'>{content.title}</div>
                  <div className='content-info-container'>
                    <img className='content-avatar' src={content.avatar} onClick={() => handleAvatarClick()}/>
                    <div className='content-name'>{content.name}</div>
                    <div className='content-date'>{content.date}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>



    </>
)
}



export default Content