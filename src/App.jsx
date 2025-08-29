import { Routes, Route } from 'react-router-dom'
import Header from "./header"
import Body from "./body"
import Footer from "./footer"

function App(){
return(
    <>
    <div className="card-flex">
    <Header/>
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/#home" element={<Body />} />
      <Route path="/#new" element={<div className="p-10"><h1 className="text-4xl font-bold mb-6">New Content</h1><p className="text-lg text-gray-600">This is the New section content.</p></div>} />
      <Route path="/#popular" element={<div className="p-10"><h1 className="text-4xl font-bold mb-6">Popular Content</h1><p className="text-lg text-gray-600">This is the Popular section content.</p></div>} />
      <Route path="/#trending" element={<div className="p-10"><h1 className="text-4xl font-bold mb-6">Trending Topics</h1><p className="text-lg text-gray-600">This is the Trending section content.</p></div>} />
      <Route path="/#categories" element={<div className="p-10"><h1 className="text-4xl font-bold mb-6">Categories</h1><p className="text-lg text-gray-600">This is the Categories section content.</p></div>} />
    </Routes>
    <Footer/>
    </div>
    </>
);
}

export default App
