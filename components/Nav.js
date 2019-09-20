import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="flex w-full h-15 relative z-10 items-center justify-between bg-gray-800 p-3">
    <div className="w-1/4 flex fixed items-center flex-shrink-0 text-white mr-4">
      <span className="font-semibold text-xl tracking-tight">Projects</span>
    </div>
    <div className="w-1/4 items-center text-white mr-4">
    </div>
    <div className="w-2/4 items-center text-white mr-4">      
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search"></input>
    </div>

    {/*<ul>
      <li>
        <Link href="/">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/announcements">
          <a>Announcements</a>
        </Link>
      </li>
    </ul>*/}

    {/*{links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}*/}
    {/*<style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>*/}
  </nav>
);

export default Nav
