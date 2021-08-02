import React from 'react'
import { Link } from 'react-router-dom'
import { FaCampground } from 'react-icons/fa'
import { FiStar, FiMoon, FiSun } from 'react-icons/fi'
import { IoLanguage } from 'react-icons/io5'
import { AiOutlineFileText, AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  const toggleDark = () => {}
  const toggleLocales = () => {}
  const isDark = true

  return (
    <nav className="text-xl mt-6 space-x-2">
      <Link className="icon-btn" to="/" title="Home">
        <FaCampground />
      </Link>

      <a
        className="icon-btn"
        rel="noreferrer"
        href="https://github.com/frandiox/vite-ssr"
        target="_blank"
        title="Library"
      >
        <FiStar />
      </a>

      <a className="icon-btn" onClick={toggleDark}>
        {isDark ? <FiMoon /> : <FiSun />}
      </a>
      <a className="icon-btn" onClick={toggleLocales}>
        <IoLanguage />
      </a>

      <Link className="icon-btn" to="/about">
        <AiOutlineFileText />
      </Link>

      <a
        className="icon-btn"
        rel="noreferrer"
        href="https://github.com/frandiox/reactesse-ssr-template"
        target="_blank"
        title="Template"
      >
        <AiFillGithub />
      </a>
    </nav>
  )
}
