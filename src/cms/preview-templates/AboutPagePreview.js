import React from '../../../node_modules/@types/React'
import PropTypes from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types'
import { AboutPageTemplate } from '../../templates/bio-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
