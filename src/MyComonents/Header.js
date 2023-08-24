import React from 'react'



function Header(props) {
  return (
    <div>
        <nav className="navbar bg-dark bg-body-tertiary"  data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
         {props.title}
    </a>
    
  </div>
</nav>

    </div>
  )
}



export default Header