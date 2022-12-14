import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.profile}>
    <div>
      <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New posts
        <div className={s.posts}>
          <div className={s.item}>Post1</div>
          <div className={s.item}>Post2</div>
        </div>
      </div>
    </div>
  </div>
}

export default Profile;