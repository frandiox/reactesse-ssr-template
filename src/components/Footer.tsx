import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <nav className="text-xl mt-6 space-x-2">
      <Link className="icon-btn" to="/" title="Home">
        Home
        {/* <carbon-campsite /> */}
      </Link>

      {/* <a
      class="icon-btn"
      rel="noreferrer"
      href="https://github.com/frandiox/vite-ssr"
      target="_blank"
      title="Library"
    >
      <carbon-star />
    </a>

    <a class="icon-btn" :title="t('button.toggle_dark')" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <a
      class="icon-btn"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <carbon-language />
    </a>

    <router-link class="icon-btn" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a
      class="icon-btn"
      rel="noreferrer"
      href="https://github.com/frandiox/reactesse-ssr-template"
      target="_blank"
      title="Template"
    >
      <carbon-logo-github />
    </a> */}
    </nav>
  )
}
