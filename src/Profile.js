import React from 'react'

export default function Profile(props) {
    console.log('---',props);
  return (
    <div>
      <img src={props.data.avatar_url} alt=""/>
      <p>{props.data.login}</p>
    </div>
  )
}
