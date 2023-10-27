import React from "react"

import { Link } from 'gatsby'

const IndexPage = () => {
  return (
	<div>
	  <h1>Hallo Selamat Siang</h1>
	  <h2>Saya Muhammad Agis.</h2>
	  <p>ingin kenal dengan saya? <a href="/contact">Hubungi saya</a></p>
	  <p>Mau jadi seorang developer? <Link to="/contact">Hubungi Saya.</Link></p>
	</div>
  )
}

export default IndexPage
