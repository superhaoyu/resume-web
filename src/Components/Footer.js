import React, { Component } from 'react'

class Footer extends Component {
  render () {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.class} />
            </a>
          </li>
        )
      })
    }
    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <url className='social-links'>{networks}</url>

            <url className='copyright'>
              <li>&copy; Copyright 2022 Haoyu Li</li>
            </url>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open' />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
